import { useState } from "react";
import { MemoType } from "../../types/type";
import EmptyMemo from "../ui/EmptyMemo";

type Props = {
  memo: MemoType;
  setMemo: (newMemo: MemoType) => void;
};

export default function MemoContainer({ memo, setMemo }: Props) {
  const [isEdit, setIsEdit] = useState(false);

  if (!memo) return <EmptyMemo />;

  return (
    <div className="rounded-2xl shadow-md p-6 m-6 flex-1 flex flex-col gap-6">
      {/* Title */}
      <div>
        {isEdit ? (
          <input
            type="text"
            className="w-full text-3xl font-bold p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
            value={memo.title}
            onChange={(e) =>
              setMemo({
                ...memo,
                title: e.target.value,
                updatedAt: Date.now(),
              })
            }
          />
        ) : (
          <h1 className="text-3xl font-bold text-neutral-800 break-words text-left">
            {memo.title || "제목 없음"}
          </h1>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        {isEdit ? (
          <textarea
            className="w-full text-lg leading-relaxed p-4 border border-neutral-300 rounded-md min-h-[500px] resize-y focus:outline-none focus:ring-2 focus:ring-amber-300"
            value={memo.description}
            onChange={(e) =>
              setMemo({
                ...memo,
                description: e.target.value,
                updatedAt: Date.now(),
              })
            }
          />
        ) : (
          <p className="whitespace-pre-wrap text-lg leading-relaxed text-neutral-700 text-left">
            {memo.description || "내용 없음"}
          </p>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsEdit((prev) => !prev)}
          className="px-6 py-2 bg-amber-200 hover:bg-amber-300 text-neutral-800 font-semibold rounded-md transition"
        >
          {isEdit ? "저장하기" : "수정하기"}
        </button>
      </div>
    </div>
  );
}