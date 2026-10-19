import perfilImg from '../assets/perfil.jpg.jpg';

export default function Hero() {
  return (
    <section
      className='min-h-screen flex items-center justify-center px-8 md:px-6 pt-20'
      id='home'
    >
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6 md:space-y-8 animate-fade-in-up text-center md:text-left mt-12 md:mt-0'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white px-2 md:px-0'>
            Miguel Angelo <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent'>
              Desenvolvedor Full Stack
            </span>
          </h1>
          <p className='text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0'>
            Desenvolvedor Júnior com atuação na Tiger Tecnologia e em projetos web.
            Trabalho com React, Node.js e APIs REST, conectando interfaces,
            dados e regras de negócio para resolver problemas reais.
          </p>
          <div className='flex flex-wrap justify-center md:justify-start gap-4'>
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

        <div className='relative flex justify-center order-first md:order-last'>
          <div className='w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent animate-[spin_10s_linear_infinite]'>
            <div className='w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden animate-[spin_10s_linear_reverse_infinite]'>
              <img src={perfilImg} alt="Miguel Angelo" className="w-full h-full object-cover object-[70%_10%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
