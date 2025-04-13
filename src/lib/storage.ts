import { MemoType } from '../types/type';

export function setItem(key: string, value: MemoType[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
  const stored = localStorage.getItem(key);
  if (!stored) return null;

  return JSON.parse(stored);
}
