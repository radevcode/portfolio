"use client";
import { useEffect, useRef } from "react";

export default function AnimatedSvgText({
  children,
  viewBox = "55 34 118 27",
  width = "",
  strokeWidth = 1.2,
  duration = 1400,
  stagger = 0.06,
  className = "",
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Stroke draw
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.animationDelay = `${i * stagger}s`;
    });

    // Mask reveal
    const rect = svg.querySelector("#reveal-rect");
    rect.animate(
      [{ width: "0%" }, { width: "100%" }],
      {
        duration,
        easing: "cubic-bezier(.22,1,.36,1)",
        fill: "forwards",
      }
    );
  }, [duration, stagger]);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="reveal-mask">
          <rect
            id="reveal-rect"
            x="55"
            y="33"
            width="0"
            height="30"
            fill="white"
          />
        </mask>
      </defs>

      <g
        mask="url(#reveal-mask)"
        className="fill-active"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}
