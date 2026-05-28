"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("js-loaded");
    }
    let frameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animateTrailingCursor = () => {
      setTrailingPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        // Simple easing for the trailing effect (approx 150ms delay visually)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frameId = requestAnimationFrame(animateTrailingCursor);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    frameId = requestAnimationFrame(animateTrailingCursor);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, [mousePos]);

  return (
    <>
      {/* Small 10x10 green square */}
      <div
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[var(--green)] pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 5}px, ${mousePos.y - 5}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      {/* Larger 36px circle outline trailing */}
      <div
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-[var(--green)] rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
}
