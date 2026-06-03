import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-wider relative z-50">
          <span className="text-brand-primary">&lt;</span>
          DEV
          <span className="text-brand-primary">/&gt;</span>
        </a>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#experience" className="nav-link">Experiência</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#contact" className="nav-link">Contato</a>
          <a href="https://wa.me/5585987110571" target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-6">Vamos Conversar</a>
        </nav>

        {/* Botão Mobile */}
        <button 
          className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors">Sobre</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors">Experiência</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors">Projetos</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors">Contato</a>
        <a href="https://wa.me/5585987110571" target="_blank" rel="noreferrer" className="btn-primary py-3 px-8 text-xl mt-4">Vamos Conversar</a>
      </div>
    </>
  );
}
