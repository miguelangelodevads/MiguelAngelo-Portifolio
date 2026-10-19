export default function About() {
  const skills = [
    ['Backend e APIs', 'Node.js, NestJS, TypeScript, APIs REST e integração entre sistemas.'],
    ['Dados', 'PostgreSQL e Prisma em projetos de gestão e comparação de preços.'],
    ['Frontend', 'React, Next.js, JavaScript, Tailwind CSS e interfaces responsivas.'],
    ['Qualidade e ferramentas', 'Git, GitHub, testes de regras de negócio, Docker e ambiente Linux.'],
    ['Desenvolvimento com IA', 'OpenAI Codex como apoio à análise, implementação, testes, refatoração e documentação, com revisão das alterações e validação do comportamento.'],
  ];
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Sobre mim e competências</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Código conectado ao negócio</h3>
            <p className="text-gray-400 leading-relaxed mb-6">Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade de Fortaleza (UNIFOR) e curso Desenvolvimento Full Stack na Digital College.</p>
            <p className="text-gray-400 leading-relaxed mb-6">Atuo como Desenvolvedor Full Stack Júnior, em atuação voluntária, na Tiger Tecnologia, contribuindo para o sistema DMTT. Também desenvolvo interfaces de e-commerce como freelancer na BG Tec.</p>
            <p className="text-gray-400 leading-relaxed">Meus projetos exploram integração de APIs, persistência de dados, controle de acesso e regras de negócio. Busco uma oportunidade júnior para contribuir com a equipe e aprofundar minha atuação em desenvolvimento backend.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map(([title, description]) => <div key={title} className="glass-panel p-6 rounded-2xl"><h3 className="font-bold text-brand-primary mb-3">{title}</h3><p className="text-gray-400 text-sm leading-relaxed">{description}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
