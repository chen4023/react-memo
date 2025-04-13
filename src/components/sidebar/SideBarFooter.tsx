import MemoAdd from "../memo/MemoAdd";
import Modal from "../common/Modal";
import { useState } from "react";

import { MemoType } from "../../types/type";
type Props = {
  addMemo: (newMemo: MemoType) => void
}
export default function SideBarFooter({ addMemo }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="bg-[#F59E0B] py-1 rounded-md text-lg my-3 w-[20%] text-white font-semibold">+</button>
      <Modal open={isOpen} onClose={handleOpen}>
        <MemoAdd onClose={handleOpen} addMemo={addMemo} />
      </Modal>
    </div>
  );
}

