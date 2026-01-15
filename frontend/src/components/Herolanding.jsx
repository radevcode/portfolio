import AnimatedSvgText from "./AnimatedSvgText";
import HelloPaths from "./HelloPaths";
import pc from "../assets/pc.png"; // Asegúrate de tener la imagen aquí

export default function Herolanding() {
  return (
    <section className="hero">
      <div className="hero-content">
        <AnimatedSvgText
          className="animated-svg"
          viewBox="55 34 118 27"
          strokeWidth={0.8}
          duration={1400}
          stagger={0.05}
        >
          <HelloPaths />
        </AnimatedSvgText>
        <p className="hero-subtitle">
          Soluciones inteligentes en la nube y conectividad total.
        </p>
        <button className="hero-btn">Empezar ahora</button>
      </div>

      <div className="hero-image-container">
        <div className="vignette-overlay"></div>
        <img 
          src={pc} 
          alt="Notebook Isométrica" 
          className="hero-main-image"
        />
      </div>
    </section>
  );
}