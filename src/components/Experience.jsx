export default function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack (Aprendiz Júnior Voluntário)',
      company: 'Tiger Tecnologia',
      period: 'Atualmente',
      description: 'Atuação direta e diária no desenvolvimento do sistema DMTT (Departamento Municipal de Transportes e Trânsito).',
      achievements: [
        'Desenvolvimento e sustentação de novas features focadas em otimizar a gestão de mobilidade e trânsito.',
        'Resolução ativa de bugs complexos e refatoração de componentes para garantir melhor performance e manutenibilidade.',
        'Trabalho ágil e colaborativo lado a lado com engenheiros seniores, absorvendo boas práticas, design patterns e participando de code reviews.',
        'Construção e aprimoramento de interfaces de usuário (UI/UX), prezando por um design limpo, responsivo e centrado na experiência do usuário.'
      ]
    },
    {
      title: 'Desenvolvedor Frontend Freelancer',
      company: 'BG Tec',
      period: 'Atualmente',
      description: 'Responsável técnico pelo desenvolvimento front-end de ponta a ponta de uma plataforma E-commerce B2C focada em baterias e instrumentos musicais (projeto ativo, atualmente em fase de construção pré-lançamento).',
      achievements: [
        'Arquitetura da aplicação utilizando React, garantindo uma vitrine virtual dinâmica, rápida e com navegação fluida.',
        'Implementação completa do fluxo de e-commerce: gerenciamento de estado do carrinho de compras, cálculo dinâmico de frete e integração com o fluxo de checkout.',
        'Foco em conversão (CRO): construção de um design responsivo e premium que passa segurança ao consumidor.',
        'Integração com APIs RESTful para consumo de catálogo de produtos, controle de estoque e processamento de pedidos.'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Experiência Profissional</h2>
        <div className="space-y-8 mt-12">
          {experiences.map((exp, index) => (
             <div key={index} className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-primary to-brand-secondary opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-brand-primary font-medium">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs font-semibold tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full text-gray-400 border border-white/10">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base mb-4">
                {exp.description}
              </p>
              <ul className="list-none space-y-3">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed">
                    <span className="text-brand-primary mr-3 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
