import { useEffect, useState } from 'react';
import { RepoCard } from './components/RepoCard';
import  Herolanding  from './components/Herolanding';

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
      <header className="border-b border-black/5">
        <Herolanding/>
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