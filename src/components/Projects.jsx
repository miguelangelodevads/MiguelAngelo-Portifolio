export default function Projects() {
  const projects = [
    {
      title: "DMTT (Tiger Tecnologia)",
      description:
        "Sistema foco do meu trabalho diário na Tiger Tecnologia. Envolve desenvolvimento de novas features, resolução de bugs complexos e otimização de interfaces utilizando uma stack moderna.",
      tags: ["React", "Trabalho Diário", "UX/UI"],
      featured: true,
      link: "https://mdmobilidade.dmtt.maceio.al.gov.br/login",
    },
    {
      title: "E-commerce Baterias",
      description:
        "Plataforma completa de vendas online para uma loja de instrumentos musicais. Vitrine dinâmica, carrinho de compras e checkout otimizado.",
      tags: ["React", "E-commerce", "Freelance", "Em Desenvolvimento"],
      featured: false,
    },
    {
      title: "Sistema PDV",
      description:
        "Ponto de venda desenvolvido como projeto pessoal para gerenciar vendas, estoque e fluxo de caixa de pequenos comércios de forma ágil.",
      tags: ["Full Stack", "Node.js", "Gestão"],
      featured: false,
      link: "https://pdv-frontend-94ou.vercel.app/",
    },
    {
      title: "App Web de Músicas",
      description:
        "Aplicação web interativa para streaming e organização de playlists musicais, com interface inspirada nos grandes players do mercado.",
      tags: ["Web App", "Áudio", "UI Moderna"],
      featured: false,
      link: "https://spotitube-mrhj.onrender.com/",
    },
    {
      title: "Agenda Pro (Android)",
      description:
        "Aplicativo Android nativo focado em músicos para gerenciamento de agenda, ensaios e shows, garantindo organização na palma da mão.",
      tags: ["Android", "Mobile", "Organização"],
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.miguelangelo.calendario",
    },
  ];

  return (
    <section className='py-12 md:py-20 px-6 bg-black/20' id='projects'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='section-title'>Projetos em Destaque</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-panel p-6 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 ${project.featured ? "ring-2 ring-brand-primary border-transparent" : ""}`}
            >
              {project.featured && (
                <span className='self-start text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full mb-4'>
                  Destaque Profissional
                </span>
              )}
              <h3 className='text-xl font-bold text-white mb-3'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed mb-6 flex-grow'>
                {project.description}
              </p>
              <div className='flex flex-col gap-4 mt-auto'>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-md border border-white/10'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-brand-primary text-sm font-medium hover:text-brand-secondary transition-colors inline-flex items-center gap-1 mt-2 w-fit'
                  >
                    Acessar Projeto
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
