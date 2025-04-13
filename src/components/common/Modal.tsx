import { ReactNode } from "react";
import { ModalPortal } from "./ModalPortal";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode
}
export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <ModalPortal>
      <section className="flex flex-col items-center justify-center w-full h-full fixed top-0 left-0 bg-neutral-900/70 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}>
        {children}
      </section>
    </ModalPortal>
  );
}

