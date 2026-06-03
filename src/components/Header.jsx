export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-wider">
          <span className="text-brand-primary">&lt;</span>
          DEV
          <span className="text-brand-primary">/&gt;</span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#experience" className="nav-link">Experiência</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#contact" className="nav-link">Contato</a>
        </nav>
        <a href="https://wa.me/5585987110571" target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-6">Vamos Conversar</a>
      </div>
    </header>
  );
}
