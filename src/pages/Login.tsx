import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react";

export function Login() {
  useEffect(() => {
    document.title = "Login | TechFront";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Tech<span className="text-blue-500">Front</span>
            </span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Acesse sua Conta</h1>
          <p className="text-zinc-400">Bem-vindo de volta ao portal.</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Login simulado!'); }}>
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
                  className="w-full bg-black/50 border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-400">Senha</label>
                <a href="#" className="text-sm text-blue-500 hover:text-blue-400 transition-colors">Esqueceu a senha?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="password" 
                  id="password" 
                  required
                  className="w-full bg-black/50 border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white font-bold text-lg px-6 py-4 rounded-xl transition-all flex items-center justify-center group"
            >
              Entrar <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-zinc-400">
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-blue-500 font-bold hover:text-blue-400 transition-colors">
                Criar conta agora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
