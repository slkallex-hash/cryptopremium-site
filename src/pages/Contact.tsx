import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Entre em Contato
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Tem dúvidas, sugestões de pauta ou interesse em parcerias comerciais? Nossa equipe está pronta para ajudar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-3 text-emerald-400" /> Fale Conosco
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                E-mail Profissional
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                Assunto
              </label>
              <select
                id="subject"
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              >
                <option>Dúvida Geral</option>
                <option>Sugestão de Pauta</option>
                <option>Parceria Comercial / Publicidade</option>
                <option>Suporte Técnico</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-zinc-950 bg-emerald-500 hover:bg-emerald-400 transition-colors"
            >
              <Send className="w-5 h-5 mr-2" /> Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-3 text-emerald-400" /> E-mail Direto
            </h3>
            <p className="text-zinc-400 mb-4">
              Para assuntos urgentes ou propostas comerciais, você também pode nos contatar diretamente através do nosso e-mail de suporte.
            </p>
            <a
              href="mailto:contato@cryptopremium.space"
              className="text-emerald-400 hover:text-emerald-300 font-medium text-lg transition-colors"
            >
              contato@cryptopremium.space
            </a>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Informações Importantes</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>Nosso tempo de resposta médio é de 24 a 48 horas úteis.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>Não prestamos consultoria financeira individual ou recomendações de investimento.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>Para anúncios e parcerias, por favor inclua o máximo de detalhes sobre sua empresa e objetivos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
