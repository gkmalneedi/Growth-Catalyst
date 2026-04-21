import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(docHeight > 0 && scrolled / docHeight >= 0.25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center",
        "bg-gradient-to-tr from-brand-pink via-brand-red to-brand-yellow text-white shadow-lg",
        "hover:scale-110 active:scale-95 transition-all duration-300",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
