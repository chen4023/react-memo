import { MemoLogo } from "../ui/MemoLogo";

export default function SideBarHeader() {

  return (
    <div className="flex items-center justify-center gap-1 font-jura">
      <MemoLogo />
      <h1 className="text-2xl text-neutral-700 font-bold pb-3 mt-3 font-jura">Noteit</h1>
    </div>
  );
}

