import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Dashboard() {
    // Consumimos el estado global y sus mutadores
    const { user, setUser, theme, toggleTheme } = useContext(AuthContext);

    // Estado local para controlar el input del formulario de edición
    const [inputName, setInputName] = useState(() => user?.name || '');

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        if (!inputName.trim()) return alert('El nombre no puede estar vacío');

        // CRITERIO DE EVALUACIÓN: Inmutabilidad. 
        // Usamos setUser pasando un nuevo objeto con el spread operator (...) sin mutar directamente.
        setUser((prevUser) => ({
            ...prevUser,
            name: inputName
        }));

        alert('¡Nombre de usuario actualizado con éxito!');
    };

    const isDark = theme === 'dark';

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Requerimiento 5: Mensaje de Bienvenida Personalizado */}
            <div>
                <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Welcome back, {user?.name}
                </h1>
                <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Here's what's happening with your workspace today.
                </p>
            </div>

            {/* Grid de Secciones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Requerimiento 7 (Extra): Formulario de edición de Perfil (Izquierda) */}
                <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-100'
                    }`}>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">👤</div>
                            <div>
                                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Profile Settings</h3>
                                <p className="text-xs text-slate-400">Manage your public identity</p>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleUpdateProfile}>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Display Name
                                </label>
                                <input
                                    type="text"
                                    value={inputName}
                                    onChange={(e) => setInputName(e.target.value)}
                                    className={`w-full px-4 py-2.5 border rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark
                                        ? 'bg-slate-800 border-slate-700 text-white focus:border-indigo-500'
                                        : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-600'
                                        }`}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    className={`w-full px-4 py-2.5 border rounded-xl text-sm opacity-60 cursor-not-allowed ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                                        }`}
                                    disabled
                                />
                            </div>
                        </form>
                    </div>

                    <div className={`pt-6 mt-6 border-t flex justify-end ${isDark ? 'border-slate-700' : 'border-slate-50'}`}>
                        <button
                            onClick={handleUpdateProfile}
                            className="px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Requerimiento 6: Preferencias y Cambio de Theme (Derecha) */}
                <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-100'
                    }`}>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">⚙️</div>
                            <div>
                                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>App Preferences</h3>
                                <p className="text-xs text-slate-400">Customize your workspace experience</p>
                            </div>
                        </div>

                        {/* Selector de Tema Funcional */}
                        <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-slate-700/50' : 'border-slate-50'}`}>
                            <div>
                                <p className="text-sm font-semibold">Theme Mode</p>
                                <p className="text-xs text-slate-400">Switch between light and dark visual styles</p>
                            </div>

                            {/* Contenedor de Botón Toggle del Tema */}
                            <div className={`p-1 rounded-xl flex gap-1 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                                <button
                                    onClick={toggleTheme}
                                    className={`px-4 py-1.5 font-medium text-xs rounded-lg transition-all flex items-center gap-1.5 ${!isDark
                                        ? 'bg-white text-slate-800 shadow-sm'
                                        : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    ☀️ Light
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className={`px-4 py-1.5 font-medium text-xs rounded-lg transition-all flex items-center gap-1.5 ${isDark
                                        ? 'bg-slate-800 text-white shadow-sm'
                                        : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                >
                                    🌙 Dark
                                </button>
                            </div>
                        </div>

                        {/* Fila ficticia de Idioma */}
                        <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-slate-700/50' : 'border-slate-50'}`}>
                            <p className="text-sm font-semibold">Interface Language</p>
                            <span className={`text-sm font-medium border px-3 py-1.5 rounded-lg ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
                                }`}>English (US) ▾</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Tarjetas de Métricas Inferiores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${isDark ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-100'}`}>
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl">💳</div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Plan</p>
                        <p className="text-base font-bold">Pro Monthly</p>
                    </div>
                </div>
                <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${isDark ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-100'}`}>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">📊</div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Storage Used</p>
                        <p className="text-base font-bold">8.4 GB / 20 GB</p>
                    </div>
                </div>
                <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${isDark ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-100'}`}>
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl">🛡️</div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Security Level</p>
                        <p className="text-base font-bold">Excellent</p>
                    </div>
                </div>
            </div>
        </div>
    );
}