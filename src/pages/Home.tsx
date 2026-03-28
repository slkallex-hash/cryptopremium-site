import { motion } from "motion/react";
import { 
  TrendingUp, Shield, Zap, Target, Users, CheckCircle2, 
  Star, ArrowRight, Lock, Award, Clock, X
} from "lucide-react";
import { DynamicNotification } from "@/components/DynamicNotification";
import { CountdownTimer } from "@/components/CountdownTimer";

export function Home() {
  return (
    <div className="w-full bg-black">
      <DynamicNotification />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-yellow-500">Inteligência Artificial Ativa</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Transforme sinais em <br className="hidden md:block" />
              <span className="text-gradient-gold">lucros reais</span> no mercado cripto
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Acesse estratégias profissionais, automação avançada e sinais de alta precisão utilizados pelas maiores mesas proprietárias do mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#planos" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all flex items-center justify-center gap-2 group">
                Começar a Lucrar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#beneficios" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
                Entrar Agora
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-zinc-400" /> Seguro e Verificado
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zinc-400" /> +10.000 Membros
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">+10k</p>
              <p className="text-sm text-zinc-400 uppercase tracking-wider">Usuários Ativos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-yellow-500 mb-2">93%</p>
              <p className="text-sm text-zinc-400 uppercase tracking-wider">Assertividade</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">24/7</p>
              <p className="text-sm text-zinc-400 uppercase tracking-wider">Monitoramento</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-cyan-400 mb-2">+R$ 5M</p>
              <p className="text-sm text-zinc-400 uppercase tracking-wider">Lucro Gerado</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Tecnologia Institucional <br />
              <span className="text-gradient-blue">Para o Seu Portfólio</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Nossa infraestrutura foi desenhada para entregar a mesma vantagem competitiva dos grandes fundos de investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sinais de Alta Precisão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Algoritmos proprietários que analisam milhões de dados por segundo para identificar as melhores oportunidades de entrada e saída.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automação com Bots</h3>
              <p className="text-zinc-400 leading-relaxed">
                Conecte sua conta via API e deixe nossos robôs executarem as operações 24 horas por dia, 7 dias por semana, sem emoção.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Resultados Consistentes</h3>
              <p className="text-zinc-400 leading-relaxed">
                Foco em gestão de risco institucional. Não buscamos apostas, buscamos crescimento de capital sustentável a longo prazo.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plataforma Segura</h3>
              <p className="text-zinc-400 leading-relaxed">
                Seu capital nunca sai da sua corretora. Operamos via chaves API restritas apenas para leitura e execução de ordens.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5 lg:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Suporte Ativo e Comunidade VIP</h3>
              <p className="text-zinc-400 leading-relaxed">
                Acesso direto aos nossos analistas e a uma comunidade de investidores de alto nível. Mentoria semanal, análises de mercado exclusivas e suporte técnico dedicado para garantir que você extraia o máximo da plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="resultados" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Resultados que Falam <br />
              <span className="text-gradient-gold">Por Si Mesmos</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Não acredite apenas em nós. Veja o que nossos membros estão alcançando todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo M.",
                role: "Investidor Iniciante",
                text: "Comecei com pouco capital e muito medo. A automação da CryptoPremium mudou o jogo pra mim. Em 3 meses, dobrei minha banca operando apenas os sinais de risco baixo.",
                profit: "+112% em 90 dias"
              },
              {
                name: "Amanda S.",
                role: "Day Trader",
                text: "A precisão dos sinais institucionais é absurda. Eu costumava passar 10 horas na frente do gráfico. Hoje, os bots fazem o trabalho pesado e eu só gerencio o risco.",
                profit: "R$ 14.500 no último mês"
              },
              {
                name: "Carlos E.",
                role: "Empresário",
                text: "Não tenho tempo para acompanhar o mercado. Conectei minha conta da Binance na plataforma e deixei rodando. A consistência dos lucros é impressionante. Melhor investimento do ano.",
                profit: "+45% de ROI passivo"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-white/5 relative">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                  <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm font-bold">
                    {testimonial.profit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Escolha o Seu Plano de <br />
              <span className="text-gradient-blue">Crescimento</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Sem taxas ocultas. Cancele quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Básico */}
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
              <p className="text-zinc-400 mb-6">Para quem está começando</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">R$ 97</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Sinais Spot (Baixo Risco)</li>
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> 1 Bot de Automação</li>
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Suporte via Email</li>
                <li className="flex items-center gap-3 text-zinc-600"><X className="w-5 h-5" /> Sinais Futuros (Alavancagem)</li>
                <li className="flex items-center gap-3 text-zinc-600"><X className="w-5 h-5" /> Grupo VIP</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                Assinar Básico
              </button>
            </div>

            {/* VIP (Destaque) */}
            <div className="glass-gold p-8 rounded-3xl border-2 border-yellow-500/50 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(234,179,8,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold px-4 py-1 rounded-full text-sm">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Premium</h3>
              <p className="text-zinc-400 mb-6">A experiência institucional completa</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">R$ 297</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Sinais Spot & Futuros</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Bots Ilimitados</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Grupo VIP no Telegram</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Mentoria Semanal ao Vivo</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Suporte Prioritário 24/7</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all">
                Garantir Vaga VIP
              </button>
              <p className="text-center text-xs text-yellow-500/70 mt-4 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" /> Vagas limitadas para manter a qualidade
              </p>
            </div>

            {/* Pro */}
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-zinc-400 mb-6">Para traders intermediários</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">R$ 147</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Sinais Spot & Futuros</li>
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> 3 Bots de Automação</li>
                <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Suporte via Ticket</li>
                <li className="flex items-center gap-3 text-zinc-600"><X className="w-5 h-5" /> Grupo VIP</li>
                <li className="flex items-center gap-3 text-zinc-600"><X className="w-5 h-5" /> Mentoria Semanal</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                Assinar Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE & CONFIANÇA */}
      <section id="sobre" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Construído por Profissionais. <br />
                <span className="text-zinc-500">Acessível para Você.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                A CryptoPremium nasceu da frustração com o mercado de "gurus" que vendem ilusões. Somos uma equipe de ex-analistas de fundos quantitativos e desenvolvedores blockchain que decidiram democratizar o acesso às ferramentas institucionais.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Nossa missão é fornecer tecnologia de ponta, sinais baseados em dados reais (on-chain e análise técnica avançada) e automação segura para que qualquer pessoa possa operar com a mesma vantagem dos grandes players.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Auditoria SSL</p>
                    <p className="text-sm text-zinc-500">Criptografia Militar</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Plataforma Verificada</p>
                    <p className="text-sm text-zinc-500">API Oficial Binance/Bybit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-yellow-500/20 blur-3xl rounded-full"></div>
              <div className="glass p-8 rounded-3xl border border-white/10 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Transparência Total</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Não temos acesso ao seu dinheiro</p>
                      <p className="text-sm text-zinc-400 mt-1">Nossos bots operam via API Restrita. É impossível realizarmos saques da sua conta.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Mercado de Renda Variável</p>
                      <p className="text-sm text-zinc-400 mt-1">Não prometemos lucros fixos. O mercado cripto tem riscos e nossa tecnologia visa minimizar perdas e maximizar ganhos a longo prazo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Oferta Encerrando</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Pronto para operar como um <span className="text-gradient-gold">Profissional?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Junte-se a mais de 10.000 investidores que já transformaram seus resultados com a CryptoPremium.
          </p>

          <div className="mb-12">
            <CountdownTimer />
          </div>

          <a href="#planos" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all group">
            Quero Começar Agora
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-6 text-sm text-zinc-500">
            Garantia incondicional de 7 dias. Risco zero.
          </p>
        </div>
      </section>
    </div>
  );
}
