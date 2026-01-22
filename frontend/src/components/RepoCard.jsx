export const RepoCard = ({ repo, index }) => {
  // Formateamos el índice para que siempre tenga dos dígitos (01, 02...)
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    // Definimos una altura fija para la card (ej: h-[450px])
    <div className="flex flex-col h-120 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* 1. IMAGEN: Altura fija y proporcional */}
      <div className="h-48 flex-1 w-2xs bg-slate-100 overflow-hidden justify-center mx-auto flex">
        <img 
          src={repo.image} 
          alt={repo.name}
          className="h-full object-cover"
        />
      </div>

      {/* 2. CONTENIDO: Con padding consistente */}
      <div className="flex flex-col grow p-6">
        
        {/* TÍTULO: Limitado a 1 línea con puntos suspensivos si es muy largo */}
        <h3 className="text-lg font-bold text-slate-900 truncate mb-2" title={repo.name}>
          {repo.name}
        </h3>

        {/* DESCRIPCIÓN: Altura fija para que todas las descripciones ocupen lo mismo */}
        <div className="h-18 overflow-hidden"> 
           <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {repo.description || "Project without description. Click to see more details in the repository."}
          </p>
        </div>

        {/* TOPICS: Espacio controlado para las etiquetas */}
        <div className="flex flex-wrap gap-2 mt-4 h-14 overflow-hidden">
          {repo.topics?.slice(0, 3).map(topic => (
            <span key={topic} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold rounded">
              {topic}
            </span>
          ))}
        </div>

        {/* 3. FOOTER: Empujado al fondo para que siempre esté alineado */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
          <div className="flex items-center gap-3">
             <span className="flex items-center text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                {repo.language || "Web"}
             </span>
          </div>
          
          <a 
            href={repo.url} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Repo →
          </a>
        </div>
      </div>
    </div>
  );
};