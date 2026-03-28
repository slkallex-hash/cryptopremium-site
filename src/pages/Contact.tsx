import { useEffect } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export function Contact() {
  useEffect(() => {
    document.title = "Contato | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Fale com nossos <span className="text-gradient-gold">Especialistas</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Dúvidas sobre os planos, configuração de bots ou parcerias institucionais? Nossa equipe de suporte premium está pronta para atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-8">Canais de Atendimento</h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-yellow-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">E-mail VIP</h3>
                    <p className="text-zinc-400 mb-2">Suporte técnico e dúvidas comerciais:</p>
                    <a href="mailto:vip@cryptopremium.space" className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors">vip@cryptopremium.space</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">WhatsApp Business</h3>
                    <p className="text-zinc-400 mb-2">Atendimento rápido em horário comercial:</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">+55 (11) 99999-9999</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 mr-6 group-hover:bg-white/10 transition-colors">
                    <MapPin className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Sede Corporativa</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Av. Faria Lima, 3000 - Itaim Bibi<br />
                      São Paulo - SP, 01451-000<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Parcerias B2B</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Representa um fundo, family office ou corretora? Oferecemos soluções White Label e acesso API institucional.
              </p>
              <a href="mailto:institucional@cryptopremium.space" className="inline-flex items-center text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
                Falar com B2B <Send className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center relative z-10">
              <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" /> Envie uma Mensagem
            </h2>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso! Nossa equipe VIP entrará em contato.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-zinc-600"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-zinc-600"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Assunto</label>
                <select 
                  id="subject" 
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all appearance-none"
                >
                  <option value="duvida" className="bg-zinc-900">Dúvida sobre Planos</option>
                  <option value="suporte" className="bg-zinc-900">Suporte Técnico / Bots</option>
                  <option value="financeiro" className="bg-zinc-900">Financeiro / Pagamentos</option>
                  <option value="parceria" className="bg-zinc-900">Parceria Institucional</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all resize-none placeholder:text-zinc-600"
                  placeholder="Como podemos ajudar a escalar seus resultados?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] text-black font-bold text-lg px-6 py-4 rounded-xl transition-all flex items-center justify-center"
              >
                Enviar Mensagem <Send className="w-5 h-5 ml-2" />
              </button>
              <p className="text-xs text-zinc-500 text-center mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
