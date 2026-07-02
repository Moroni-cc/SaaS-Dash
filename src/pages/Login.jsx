// src/pages/Login.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert('Por favor ingresa un correo electrónico');
            return;
        }
        loginUser(email, name);
        navigate('/dashboard'); // <-- redirige después de loguear
    };

    // ... resto del return se queda igual

    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 p-8 flex flex-col items-center">

                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                    🚀
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
                <p className="text-slate-500 text-sm mb-8 text-center">
                    Please enter your details to sign in
                </p>

                <form className="w-full space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Alex Johnson"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-sm"
                            required
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Password
                            </label>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 text-sm"
                    >
                        Sign In <span>→</span>
                    </button>
                </form>

                <div className="w-full flex items-center my-6">
                    <div className="flex-1 h-px bg-slate-200"></div>
                    <span className="px-3 text-xs text-slate-400 uppercase tracking-wider bg-white">Or continue with</span>
                    <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        loginUser('google.user@gmail.com', 'Google User');
                        navigate('/dashboard');
                    }}
                    className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                    <span className="font-bold text-red-500">G</span> Sign in with Google
                </button>
            </div>
        </div>
    );
}