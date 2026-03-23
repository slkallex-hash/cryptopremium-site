import { useEffect } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export function Contact() {
  useEffect(() => {
    document.title = "Contato | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Fale <span className="text-emerald-400">Conosco</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Tem alguma dúvida, sugestão de pauta ou interesse em parcerias comerciais? Nossa equipe está pronta para atender você.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
            <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-1">E-mail</h3>
                  <p className="text-zinc-400 mb-1">Para dúvidas gerais e suporte:</p>
                  <a href="mailto:contato@cryptopremium.space" className="text-emerald-400 hover:underline font-medium">contato@cryptopremium.space</a>
                  
                  <p className="text-zinc-400 mt-3 mb-1">Para parcerias e publicidade:</p>
                  <a href="mailto:comercial@cryptopremium.space" className="text-emerald-400 hover:underline font-medium">comercial@cryptopremium.space</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-1">Endereço</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100<br />
                    Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-1">Telefone</h3>
                  <p className="text-zinc-400">
                    +55 (11) 99999-9999<br />
                    <span className="text-sm text-zinc-500">(Apenas horário comercial)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
            <h2 className="text-xl font-bold text-white mb-4">Trabalhe Conosco</h2>
            <p className="text-zinc-400 mb-4 leading-relaxed">
              Estamos sempre em busca de talentos apaixonados por criptomoedas, jornalismo e tecnologia. Se você quer fazer parte da equipe CryptoPremium, envie seu currículo e portfólio.
            </p>
            <a href="mailto:vagas@cryptopremium.space" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
              Enviar currículo <Send className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-3 text-emerald-400" /> Envie uma Mensagem
          </h2>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso! Entraremos em contato em breve.'); }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-black border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-black border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">Assunto</label>
              <select 
                id="subject" 
                className="w-full bg-black border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none"
              >
                <option value="duvida">Dúvida Geral</option>
                <option value="sugestao">Sugestão de Pauta</option>
                <option value="parceria">Parceria Comercial / Publicidade</option>
                <option value="erro">Reportar Erro no Site</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Mensagem</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full bg-black border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-lg px-6 py-4 rounded-xl transition-colors flex items-center justify-center"
            >
              Enviar Mensagem <Send className="w-5 h-5 ml-2" />
            </button>
            <p className="text-xs text-zinc-500 text-center mt-4">
              Ao enviar, você concorda com nossa Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
