import { useEffect, useState } from 'react';
import { RepoCard } from './components/RepoCard';

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/github/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] selection:bg-black selection:text-white">
      {/* Header Estilo Editorial */}
      <header className="px-6 py-24 md:px-20 border-b border-black/5">
        <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter">
          DevOps<br />
          <span className="text-gray-300">Solutions</span>
        </h1>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="font-bold uppercase text-sm tracking-widest">Selected Works 2026</p>
          <p className="max-w-md text-gray-500 uppercase text-xs leading-loose tracking-widest">
            Specializing in high-availability systems, container orchestration, 
            and automated cloud infrastructure.
          </p>
        </div>
      </header>

      {/* Listado de Repositorios */}
      <main className="px-6 py-24 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
        {repos.map((repo, index) => (
          <RepoCard key={repo.url} repo={repo} index={index} />
        ))}
      </main>

      <footer className="p-20 text-center text-gray-400 text-xs tracking-widest uppercase">
        Built with React + Tailwind v4 + Go
      </footer>
    </div>
  );
}