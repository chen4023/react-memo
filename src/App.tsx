import { useState } from 'react';
import './App.css';
import MemoContainer from './components/memo/MemoContainer';
import SideBar from './components/sidebar/SideBar';
import { MemoType } from './types/type';
import { getItem, setItem } from './lib/storage';


function App() {
  const [memos, setMemos] = useState<MemoType[]>(getItem('memo') || [])
  const [selectedMemoIndex, setSelectedMemoIndex] = useState<number>(0)

  const addMemo = (newMemo: MemoType) => {
    setMemos((prev) => [...prev, newMemo])
    setSelectedMemoIndex(memos.length)
    setItem('memo', [...memos, newMemo])
  }

  const setMemo = (newMemo: MemoType) => {
    // 불변성이 훼손된 코드 : memos[selectedMemoIndex] = newMemo;
    // 기존 상태를 복사하여 새롭게 생성한 후에 복사한 배열에 새로운 메모를 할당하여 상태 업데이트
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo
    // setMemo(memos)로 변경하는 경우에는 javascript의 참조값이 동일하기 때문에 상태변화라고 인식하지 않음
    // 따라서 배열을 푼 후에 다시 할당을 해주어야 상태 변경으로 인지가 됨
    setMemos([...newMemos])
    setItem('memo', newMemos)
  }
  const deleteMemo = (index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
    if (index === selectedMemoIndex) {
      if (selectedMemoIndex === 0) {
        setSelectedMemoIndex(selectedMemoIndex)
      } else {
        setSelectedMemoIndex(selectedMemoIndex - 1)
      }
    }
    setItem('memo', newMemos)

  }

  return (
    <div className='flex h-[100vh]'>
      <SideBar memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
