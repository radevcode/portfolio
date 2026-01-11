import { useEffect, useState } from 'react'

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/github/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
  <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] selection:bg-black selection:text-white">
    {/* Navegación Minimalista */}
    <nav className="p-8 flex justify-between items-center uppercase tracking-tighter font-black text-sm">
      <span>Portfolio 2026</span>
      <div className="space-x-8">
        <a href="#" className="hover:line-through">Index</a>
        <a href="#" className="hover:line-through">About</a>
      </div>
    </nav>

    <main className="px-8 py-20">
      {/* Hero Section */}
      <section className="mb-40">
        <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter italic">
          Selected <br /> <span className="text-gray-300">Architecture</span>
        </h1>
        <div className="mt-12 flex justify-end">
          <p className="max-w-md text-xl leading-snug font-medium">
            Ingeniería de software enfocada en despliegue continuo, 
            automatización de infraestructura y escalabilidad en la nube.
          </p>
        </div>
      </section>

      {/* Grid de Proyectos Estilo Galería */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
        {repos.map((repo, idx) => (
          <div key={repo.url} className="group relative">
            {/* Número de proyecto decorativo */}
            <span className="absolute -top-10 left-0 font-mono text-sm text-gray-400">
              0{idx + 1} / REPOSITORY
            </span>
            
            {/* Contenedor de "Imagen" (Placeholder con gradiente) */}
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
               <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-800 flex items-center justify-center text-white/10 text-9xl font-black">
                 {repo.name[0]}
               </div>
            </div>

            {/* Info del Proyecto */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none w-2/3">
                {repo.name}
              </h2>
              <span className="text-xs font-bold border border-black px-2 py-1 uppercase">
                {repo.language || "Cloud"}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
              {repo.description || "Despliegue automatizado y configuración de entornos de alta disponibilidad."}
            </p>

            <a 
              href={repo.url} 
              target="_blank" 
              className="inline-block text-sm font-black uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
            >
              Explore Source Code →
            </a>
          </div>
        ))}
      </div>
    </main>

    <footer className="p-20 text-center border-t border-gray-200 mt-40">
      <p className="text-[5vw] font-black uppercase tracking-tighter">Let's build the future.</p>
    </footer>
  </div>
);
  
}

