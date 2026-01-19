import { useEffect, useRef } from "react";

export default function AnimatedSvgText({
  children,
  viewBox = "55 34 118 27",
  strokeWidth = 0.6,
  duration = 1800,
  stagger = 0.08,
  className = "",
}) {
  const svgRef = useRef(null);
  const animated = useRef(false); //flag para evitar repetir la animacion

  useEffect(() => {
    // Evita que la animacion se repita
    if (AnimatedSvgText.current) return;
    const svg = svgRef.current;
    if (!svg) return;

    // 1. Limpiamos y preparamos los paths
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      
      // Estado inicial forzado
      path.style.transition = "none";
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.fillOpacity = "0";
      path.style.stroke = "#fff";

      // El truco para que el navegador se entere del cambio
      path.getBoundingClientRect();

      // Disparamos la animación con un pequeño delay
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset 1.5s ease-in-out ${i * stagger}s, fill-opacity 1s ease-in ${1.2 + (i * stagger)}s`;
        path.style.strokeDashoffset = "0";
        path.style.fillOpacity = "1";
      }, 50);
    });

    // 2. Animación de la máscara manual (Sin depender de clases CSS externas)
    const rect = svg.querySelector("#reveal-rect");
    if (rect) {
      rect.style.width = "0%"; // Reset
      setTimeout(() => {
        rect.style.transition = `width ${duration}ms cubic-bezier(.22,1,.36,1)`;
        rect.style.width = "100%";
      }, 100);
    }
    animated.current = true;
  }, []); // Se reinicia si el contenido cambia

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={`overflow-visible ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        {/* FILTRO DE GLOW SUAVE */}
        <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <mask id="reveal-mask">
          <rect
            id="reveal-rect"
            x="55" 
            y="34"
            width="0"
            height="100%"
            fill="white"
          />
        </mask>
      </defs>

      <g
        mask="url(#reveal-mask)"
        filter="url(#soft-glow)"
        stroke="#fff"
        strokeWidth={strokeWidth}
        fill="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}