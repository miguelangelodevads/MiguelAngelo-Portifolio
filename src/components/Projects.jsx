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
      title: "Compra Certa",
      image: "/projects/compra-certa.png",
      imageAlt: "Interface do projeto Compra Certa, versão em desenvolvimento",
      description: "Projeto de comparação de preços com frontend Next.js e API NestJS. Inclui coleta de observações, entrada manual, validação de elegibilidade, deduplicação e recomendação considerando a recência dos dados. Persistência com Prisma e PostgreSQL.",
      tags: ["NestJS", "APIs REST", "PostgreSQL", "Prisma", "Em desenvolvimento"],
    },
    {
      title: "JB Produção",
      images: [
        { src: "/projects/jb-login.jpg", alt: "Tela de login do JB Produção", label: "Login · PDF de demonstração" },
        { src: "/projects/jb-programacao.jpg", alt: "Tela interna de programação musical do JB Produção", label: "Programação musical · PDF de demonstração" },
      ],
      description: "Sistema em desenvolvimento para organizar apresentações, artistas e estabelecimentos. O projeto trabalha com agenda, permissões por artista e regras de comissões e fechamento por estabelecimento, usando Next.js, NestJS e PostgreSQL.",
      tags: ["TypeScript", "NestJS", "Next.js", "Regras de negócio"],
    },
    {
      title: "Casa do Batera",
      link: "https://casa-do-batera-01.vercel.app/",
      images: [
        { src: "/projects/casa-do-batera-inicio-completa.jpg", alt: "Página inicial atual da Casa do Batera", fullPage: true, label: "Página inicial completa · Clique para ampliar" },
        { src: "/projects/casa-do-batera-catalogo-completa.jpg", alt: "Catálogo atual da Casa do Batera", fullPage: true, label: "Catálogo completo · Clique para ampliar" },
      ],
      description: "E-commerce de instrumentos musicais novos e seminovos, em desenvolvimento. Atuação no frontend com catálogo, variações de produtos, carrinho e integração com APIs de pedidos e estoque. Pagamentos e consistência de estoque fazem parte do trabalho em evolução.",
      tags: ["React", "APIs REST", "E-commerce", "Freelance"],
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
              {(project.images || (project.image ? [{ src: project.image, alt: project.imageAlt, label: 'Captura real · Versão em desenvolvimento' }] : [])).map((image) => (
                <figure key={image.src} className="mb-5">
                  <a href={image.src} target="_blank" rel="noreferrer" className="block rounded-xl overflow-hidden border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary" aria-label={`Ampliar: ${image.alt}`}>
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className={image.fullPage ? "w-full h-auto bg-black/20" : "w-full aspect-[16/10] object-contain bg-black/20"} />
                  </a>
                  <figcaption className="text-xs text-gray-400 mt-2">{image.label}</figcaption>
                </figure>
              ))}
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
