import perfilImg from '../assets/perfil.jpg.jpg';

export default function Hero() {
  return (
    <section
      className='min-h-screen flex items-center justify-center px-6 pt-20'
      id='home'
    >
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-8 animate-fade-in-up'>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight text-white'>
            Transformando <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent'>
              Ideias em Código
            </span>
          </h1>
          <p className='text-lg text-gray-400 max-w-lg leading-relaxed'>
            Sou um Desenvolvedor Full Stack Júnior apaixonado por criar
            interfaces limpas, modernas e sistemas eficientes. Pronto para
            agregar valor à sua equipe.
          </p>
          <div className='flex flex-wrap gap-4'>
            <a href='#projects' className='btn-primary'>
              Ver Projetos
            </a>
            <a href='/curriculo_miguel_angelo.pdf' download className='btn-outline flex items-center gap-2'>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Currículo
            </a>
            <a href='#contact' className='text-gray-400 hover:text-white transition-colors px-4 py-2 flex items-center'>
              Contato
            </a>
          </div>
        </div>

        <div className='relative hidden md:flex justify-center'>
          <div className='w-80 h-80 rounded-full p-1 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent animate-[spin_10s_linear_infinite]'>
            <div className='w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden animate-[spin_10s_linear_reverse_infinite]'>
              <img src={perfilImg} alt="Miguel Angelo" className="w-full h-full object-cover object-[70%_10%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
