import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { MemoType } from './types/type';


function App() {
  const [memos, setMemos] = useState<MemoType[]>([
    {
      title: 'memo1',
      description: 'This is memo1',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    },
    {
      title: 'memo2',
      description: 'This is memo2',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }, {
      title: 'memo3',
      description: 'This is memo3',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
  ])
  const [selectedMemoIndex, setSelectedMemoIndex] = useState<number>(0)

  const addMemo = (newMemo: MemoType) => {
    setMemos((prev) => [...prev, newMemo])
    setSelectedMemoIndex(memos.length)
  }

  const setMemo = (newMemo: MemoType) => {
    // 불변성이 훼손된 코드 : memos[selectedMemoIndex] = newMemo;
    // 기존 상태를 복사하여 새롭게 생성한 후에 복사한 배열에 새로운 메모를 할당하여 상태 업데이트
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo
    // setMemo(memos)로 변경하는 경우에는 javascript의 참조값이 동일하기 때문에 상태변화라고 인식하지 않음
    // 따라서 배열을 푼 후에 다시 할당을 해주어야 상태 변경으로 인지가 됨
    setMemos([...newMemos])
  }
  const deleteMemo = (index: number) => {
    const newMemo = [...memos]
    newMemo.splice(index, 1)
    setMemos(newMemo)
    if (index === selectedMemoIndex) {
      if (selectedMemoIndex === 0) {
        setSelectedMemoIndex(selectedMemoIndex)
      } else {
        setSelectedMemoIndex(selectedMemoIndex - 1)
      }

    }
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
