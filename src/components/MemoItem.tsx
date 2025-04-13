import { MemoType } from "../types/type";
import { MdDeleteForever } from "react-icons/md";

type Props = {
  memo: MemoType;
  isSelected: boolean;
  index: number;
  onClick: () => void;
  deleteMemo: (index: number) => void;
}

export default function MemoItem({ memo, index, onClick, isSelected, deleteMemo }: Props) {
  return (
    <div onClick={onClick} className={`group w-full truncate p-2 cursor-pointer flex justify-between ${isSelected ? 'bg-amber-50 font-bold' : ''}`}>
      <p>{memo.title}</p>
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteMemo(index)
        }}
        className="text-[#F59E0B] opacity-0 group-hover:opacity-100 transition"><MdDeleteForever /></button>
    </div>
  );
}

