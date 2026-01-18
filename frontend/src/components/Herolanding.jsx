import AnimatedSvgText from "./AnimatedSvgText";
import HelloPaths from "./HelloPaths";
import note from "../assets/note.png"; // Asegúrate de tener la imagen aquí

export default function Herolanding() {
  return (
    <section className="relative flex items-center justify-center min-h-100dvh
      w-screen overflow-hidden bg-linear-to-b from-slate-950 to-blue-950 " >
        {/* Contenedor principal con diseño de cuadrícula */}
      <div className="flex flex-col md:flex-row w-full min-h-100dvh">
              {/* bloque = text + svg */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12 md:px-16 lg:px-24 order-2 md:order-1">
        <div className="max-w-xl space-y-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-400">
            Digital Experience
          </span>
          {/* SVG animado y subtítulo */}
          <div className="w-full max-w-60 md:max-w-75 pb-10">
        
          <AnimatedSvgText 
            viewBox="55 34 118 27" 
            strokeWidth={0.5} 
            duration={2000} 
            stagger={0.1}
            className="w-full max-w-4xl"
          >
            <HelloPaths />
          </AnimatedSvgText>
          <p className="hero-subtitle text-white">
            Soluciones inteligentes en la nube y conectividad total.
          </p>
        </div>
    </div>
  </div>
        {/* bloque = imagen */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 order-1 md:order-2">
            <div className="relative w-full max-w-87.5 md:max-w-137.5">
              <img 
                src={note} 
                alt="Notebook Illustration" 
                className="w-full h-auto] z-10"
              />
          </div>
      </div>

  </div>

  <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[140%] h-40 bg-white z-40 flex items-start justify-center"
        style={{ borderRadius: '100% 100% 0 0' }}>
        <h1 className="text-2xl mt-2">My Work</h1>
  </div>
    </section>
  );
}