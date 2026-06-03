export default function About() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Minha Jornada</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sou formado em Análise e Desenvolvimento de Sistemas pela <strong className="text-white">Universidade de Fortaleza (UNIFOR)</strong>, onde adquiri uma base sólida em lógica e engenharia de software.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Atualmente, busco aperfeiçoamento contínuo estudando <strong className="text-white">Desenvolvimento Full Stack na Digital College</strong>, aprofundando meus conhecimentos nas tecnologias mais demandadas pelo mercado e me preparando para resolver problemas complexos através de código.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0">
            <div className="glass-panel p-6 rounded-2xl text-center border-t-4 border-t-brand-primary hover:-translate-y-2 transition-transform duration-300">
               <div className="text-4xl font-bold text-brand-primary mb-2">+2</div>
               <div className="text-gray-400 text-sm">Anos de Estudo</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center border-t-4 border-t-brand-secondary hover:-translate-y-2 transition-transform duration-300">
               <div className="text-4xl font-bold text-brand-secondary mb-2">+5</div>
               <div className="text-gray-400 text-sm">Projetos Criados</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center border-t-4 border-t-brand-accent hover:-translate-y-2 transition-transform duration-300 col-span-2">
               <div className="text-xl font-bold text-white mb-2">Stack Principal</div>
               <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm font-medium text-brand-accent">
                 <span className="px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">React</span>
                 <span className="px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">JavaScript</span>
                 <span className="px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">TailwindCSS</span>
                 <span className="px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">Node.js</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
