import { Dispatch, SetStateAction } from 'react';

export type MemoType = {
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
};

export type IndexStateType = {
  selectedMemoIndex: number;
  setSelectedMemoIndex: Dispatch<SetStateAction<number>>;
};

export type MemoChildType = {
  memos: MemoType[];
  selectedMemoIndex: number;
  setSelectedMemoIndex: Dispatch<SetStateAction<number>>;
  setMemos?: () => void;
  addMemo?: (newMemo: MemoType) => void;
  deleteMemo?: (index: number) => void;
};
