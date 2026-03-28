import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Shield, ArrowRight, Lock, X } from "lucide-react";

export function Premium() {
  useEffect(() => {
    document.title = "TechFront Premium | Acesso Exclusivo";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6 border border-blue-500/20 bg-blue-500/10">
            <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">TechFront Premium</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Vá além das manchetes. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Domine a inovação.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Junte-se à comunidade de líderes, desenvolvedores e investidores que recebem análises profundas, relatórios exclusivos e acesso antecipado às tendências que moldam o futuro.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* Free Tier (Current) */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col relative overflow-hidden">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Leitor Gratuito</h3>
              <p className="text-zinc-400">Acesso básico às notícias do dia a dia.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display font-bold text-white">R$ 0</span>
              <span className="text-zinc-500"> /mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span>Acesso a todas as notícias diárias</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span>Newsletter semanal (resumo)</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500">
                <X className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Análises aprofundadas e relatórios</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500">
                <X className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Comunidade exclusiva no Discord</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500">
                <X className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Navegação sem anúncios</span>
              </li>
            </ul>
            <Link to="/cadastro" className="w-full py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10 text-center">
              Criar Conta Grátis
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-blue-500/50 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] bg-blue-950/10">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Recomendado
            </div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                TechFront Premium <Star className="w-5 h-5 text-blue-400 fill-blue-400" />
              </h3>
              <p className="text-blue-200/70">Para quem precisa estar um passo à frente.</p>
            </div>
            <div className="mb-8 relative z-10">
              <span className="text-5xl font-display font-bold text-white">R$ 29</span>
              <span className="text-zinc-500"> ,90/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1 relative z-10">
              <li className="flex items-start gap-3 text-white">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Tudo do plano gratuito</strong></span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Acesso ilimitado a <strong>análises aprofundadas</strong> e artigos exclusivos</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Relatórios mensais</strong> sobre tendências de IA e mercado Tech</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Acesso à <strong>comunidade privada</strong> no Discord com editores</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Experiência de leitura <strong>100% sem anúncios</strong></span>
              </li>
            </ul>
            <Link to="/cadastro?plan=premium" className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all text-center flex items-center justify-center gap-2 group relative z-10">
              Assinar Premium <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Por que assinar o Premium?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Informação Acionável</h3>
              <p className="text-zinc-400 leading-relaxed">
                Nossos relatórios não apenas relatam os fatos, mas analisam o impacto real das novas tecnologias no seu negócio e carreira.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Leitura Sem Distrações</h3>
              <p className="text-zinc-400 leading-relaxed">
                Foque no que importa. Assinantes Premium navegam por todo o portal sem nenhum banner ou anúncio publicitário.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Comunidade Fechada</h3>
              <p className="text-zinc-400 leading-relaxed">
                Debata as últimas notícias, tire dúvidas e faça networking com outros profissionais de tecnologia e nossa equipe editorial.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-white mb-2">Posso cancelar a qualquer momento?</h4>
              <p className="text-zinc-400">Sim. Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento através do painel da sua conta, e continuará tendo acesso até o fim do período já pago.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-white mb-2">Quais são as formas de pagamento?</h4>
              <p className="text-zinc-400">Aceitamos todos os principais cartões de crédito (Visa, Mastercard, Amex) e PIX para planos anuais.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-white mb-2">O conteúdo gratuito vai acabar?</h4>
              <p className="text-zinc-400">Não. O TechFront continuará publicando notícias diárias abertas para todos. O Premium é focado em análises mais profundas, relatórios extensos e recursos extras (como a remoção de anúncios).</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
