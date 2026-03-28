import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User, ArrowRight, ShieldCheck } from "lucide-react";

export function Register() {
  useEffect(() => {
    document.title = "Cadastro | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Crypto<span className="text-yellow-500">Premium</span>
            </span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Crie sua Conta</h1>
          <p className="text-zinc-400">Junte-se a mais de 10.000 investidores de elite.</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Cadastro simulado!'); }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-black/50 border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="Seu nome"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">E-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-2">Senha Segura</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="password" 
                  id="password" 
                  required
                  className="w-full bg-black/50 border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="Mínimo 8 caracteres"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6">
              <div className="flex items-center h-5">
                <input 
                  id="terms" 
                  type="checkbox" 
                  required
                  className="w-4 h-4 rounded border-zinc-700 bg-black/50 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-0"
                />
              </div>
              <div className="text-sm">
                <label htmlFor="terms" className="text-zinc-400">
                  Concordo com os <Link to="/termos" className="text-cyan-400 hover:underline">Termos de Uso</Link> e a <Link to="/privacidade" className="text-cyan-400 hover:underline">Política de Privacidade</Link>.
                </label>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] text-white font-bold text-lg px-6 py-4 rounded-xl transition-all flex items-center justify-center group mt-6"
            >
              Criar Conta Gratuita <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Seus dados estão protegidos com criptografia SSL.
          </div>

          <div className="mt-8 text-center border-t border-white/5 pt-6">
            <p className="text-zinc-400">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                Fazer login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
