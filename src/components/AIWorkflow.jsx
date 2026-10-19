export default function AIWorkflow() {
  const steps = [
    ['01', 'Entender e planejar', 'Uso o ChatGPT Work para organizar requisitos, discutir regras de negócio, explorar alternativas e dividir as entregas em etapas.'],
    ['02', 'Construir com contexto', 'Trabalho com o Codex nos repositórios para analisar o código existente, implementar funcionalidades, investigar erros e refatorar componentes.'],
    ['03', 'Revisar e validar', 'Reviso as alterações, executo verificações e testes, confiro o comportamento das telas e acompanho a publicação das entregas.'],
  ];
  return (
    <section id="ai" className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-primary text-sm font-semibold tracking-widest uppercase mb-4">Inteligência artificial no desenvolvimento</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Da ideia ao código, com IA e revisão humana.</h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed mb-10">ChatGPT Work e OpenAI Codex fazem parte do meu fluxo de trabalho em Compra Certa, Casa do Batera e JB Produção. Uso IA para transformar necessidades do negócio em tarefas, evoluir o código e apoiar a investigação de problemas. As decisões e a validação das entregas continuam sob minha responsabilidade.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(([number, title, description]) => (
            <article key={number} className="glass-panel p-7 rounded-2xl">
              <span className="text-brand-primary text-sm font-bold">{number}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
        <a href="#projects" className="inline-block text-brand-primary mt-7 hover:underline">Conheça os projetos em que aplico esse fluxo →</a>
      </div>
    </section>
  );
}
