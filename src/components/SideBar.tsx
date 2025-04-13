import MemoList from "./MemoList";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";
import { MemoChildType } from "../types/type";



export default function SideBar({ memos, selectedMemoIndex, setSelectedMemoIndex, addMemo, deleteMemo }: MemoChildType) {
  return (
    <div className="bg-amber-100 w-[250px]">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo} />
      {addMemo && <SideBarFooter addMemo={addMemo} />}
    </div>
  );
}

