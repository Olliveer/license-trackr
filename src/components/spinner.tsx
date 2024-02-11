import { Loader2 } from "lucide-react";

function Spinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white/80">
      <Loader2 className="h-4 w-4 text-slate-600 animate-spin duration-200" />
    </div>
  );
}

export default Spinner;
