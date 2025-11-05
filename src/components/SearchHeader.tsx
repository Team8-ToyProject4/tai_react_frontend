import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function SearchHeader() {
  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-blue-600 dark:text-blue-400 mb-2 font-bold text-xl">
          T-AI
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          한국에서 급상승 중인 검색어를 실시간으로 확인하세요
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 text-sm text-muted-foreground dark:text-gray-300">
          <Search size={16} />
          <span>트렌드 탐색</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
