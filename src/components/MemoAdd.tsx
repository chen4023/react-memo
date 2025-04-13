import { useState } from "react";
import { MemoType } from "../types/type";

type Props = {
  onClose: () => void
  addMemo: (newMemo: MemoType) => void
}
export default function MemoAdd({ onClose, addMemo }: Props) {
  const [newMemo, setNewMemo] = useState<MemoType>(
    {
      title: '',
      description: '',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewMemo({ ...newMemo, [name]: value })
  }
  const handleClick = () => {
    addMemo(newMemo)
    onClose()
  }
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <button
        className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
        onClick={onClose}
      >
        ×
      </button>
      {/* 콘텐츠 */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">메모 추가하기</h2>
        <input name="title" value={newMemo.title} onChange={handleChange} type="text" className="mb-2 w-full p-2 border rounded" placeholder="제목을 입력하세요." />
        <textarea name="description" value={newMemo.description} onChange={handleChange} className="w-full p-2 border rounded h-60" placeholder="본문을 입력하세요." />
        <button onClick={handleClick} className="bg-amber-100 p-3 rounded-lg font-bold hover:bg-amber-200">추가하기</button>
      </div>
    </div>
  );
}

