import { MemoChildType } from "../../types/type";
import MemoItem from "./MemoItem";

export default function MemoList({ memos, selectedMemoIndex, setSelectedMemoIndex, deleteMemo }: MemoChildType
) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          onClick={() => setSelectedMemoIndex(index)}
          isSelected={selectedMemoIndex === index}
          memo={memo}
          deleteMemo={deleteMemo!} />
      ))}
    </div>
  );
}

