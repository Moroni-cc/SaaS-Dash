import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
    const { user, logoutUser, theme } = useContext(AuthContext);

    if (!user) return null;

    return (
        <header className={`w-full border-b px-6 py-4 flex items-center justify-between transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'
            }`}>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                    S
                </div>
                <span className={`font-bold text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    SaaS Dash
                </span>
            </div>

            {/* Perfil y Cierre de Sesión */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{user.role}</p>
                    </div>
                    <img
                        src={user.avatar}
                        alt={`Avatar de ${user.name}`}
                        className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                    />
                </div>

                <button
                    onClick={logoutUser}
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                        }`}
                >
                    <span>🚪</span> Log Out
                </button>
            </div>
        </header>
    );
}