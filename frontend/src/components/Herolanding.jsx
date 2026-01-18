import AnimatedSvgText from "./AnimatedSvgText";
import HelloPaths from "./HelloPaths";
import note from "../assets/note.png"; // Asegúrate de tener la imagen aquí

export default function Herolanding() {
  return (
    <section className="flex flex-col @lg:flex-row items-center justify-center min-h-[50vh] max-screen
      width:100% gap-2 pr-5 relative overflow-hidden bg-[#020617] " >
      <div className="flex-1 z-2 max-w-125">
<AnimatedSvgText 
  viewBox="55 34 118 27" 
  strokeWidth={0.5} 
  duration={2000} 
  stagger={0.1}
  className="w-full max-w-4xl"
>
  <HelloPaths />
</AnimatedSvgText>
        <p className="hero-subtitle">
          Soluciones inteligentes en la nube y conectividad total.
        </p>
        <button className="hero-btn">Empezar ahora</button>
      </div>

      <div className="flex-1 flex justify-center items-center relative">
        <div className="vignette-overlay"></div>
        <img 
          src={note} 
          alt="Notebook Isométrica" 
          className="max-w-[500px] h-auto relative z-1"
        />
      </div>
    </section>
  );
}