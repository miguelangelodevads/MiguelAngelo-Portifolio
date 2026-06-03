export default function Contact() {
  return (
    <section className="py-20 px-6 relative" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title">Vamos Conversar?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Estou sempre aberto a novas oportunidades e desafios. Se você está procurando um Desenvolvedor Júnior dedicado, com vontade de aprender e gerar valor, mande uma mensagem!
        </p>
        <a href="https://wa.me/5585987110571" target="_blank" rel="noreferrer" className="btn-primary inline-block">
          Chamar no WhatsApp
        </a>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Desenvolvido com React & Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/miguel-angelo-russo-neto-angelo-bbaa48280/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/miguelangelodevads" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
