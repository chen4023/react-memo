export default function EmptyMemo() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-full text-center text-neutral-400 px-4 py-8">
      <div className="text-6xl mb-4">📝</div>
      <h2 className="text-xl font-semibold mb-2">작성된 메모가 없어요</h2>
      <p className="text-sm mb-4">왼쪽 상단의 <span className="font-bold text-[#F59E0B]">[+]</span> 버튼을 눌러 새로운 메모를 추가해보세요!</p>
    </div>
  );
}