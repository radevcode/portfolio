export const RepoCard = ({ repo, index }) => {
  // Formateamos el índice para que siempre tenga dos dígitos (01, 02...)
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative border-b border-gray-200 pb-12 transition-all duration-500 hover:border-black">
      {/* Indicador de número estilo dunks1980 */}
      <div className="flex justify-between items-end mb-6">
        <span className="font-mono text-xs tracking-widest text-gray-400">
          {displayIndex} / {repo.language || "CLOUD"}
        </span>
      </div>

      {/* Contenedor de "Preview" (Placeholder minimalista) */}
      <div className="aspect-video bg-gray-100 overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="text-9xl font-black">{repo.name[0]}</span>
        </div>
        {/* Aquí podrías poner una imagen real en el futuro */}
      </div>

      {/* Información del Repo */}
      <div className="space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
          {repo.name}
        </h2>
        
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl italic">
          {repo.description || "Infrastructure as Code and automated deployment pipelines."}
        </p>

        <div className="pt-4">
          <a 
            href={repo.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
          >
            Explore Case Study <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};