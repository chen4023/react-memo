import { ReactNode } from 'react';
import ReactDom from 'react-dom';

type ModalPortalProps = {
  children: ReactNode;
};
export const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal');
  if (!el) return null;
  return ReactDom.createPortal(children, el);
};
