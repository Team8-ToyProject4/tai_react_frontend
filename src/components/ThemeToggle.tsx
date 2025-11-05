import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center gap-0 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-lg transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:bg-muted dark:hover:bg-muted md:static md:inline-flex md:h-auto md:w-auto md:gap-2 md:bg-card/70 md:px-3 md:py-2 md:shadow-sm"
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {isDark ? (
        <>
          <Sun size={16} />
          <span className="hidden md:inline">라이트</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span className="hidden md:inline">다크</span>
        </>
      )}
    </button>
  );
}
