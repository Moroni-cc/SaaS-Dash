import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const NAV_ITEMS = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'analytics',
        label: 'Analytics',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="4" y="12" width="4" height="8" rx="1" fill="currentColor" />
                <rect x="10" y="7" width="4" height="13" rx="1" fill="currentColor" />
                <rect x="16" y="3" width="4" height="17" rx="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
    },
    {
        id: 'account',
        label: 'Account',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
        ),
    },
];

export default function MobileNav() {
    const { theme } = useContext(AuthContext);
    const isDark = theme === 'dark';
    const [active, setActive] = useState('dashboard');

    return (
        <nav
            className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-md transition-colors ${isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-100'
                }`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            <div className="grid grid-cols-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActive(item.id)}
                            className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${isActive
                                ? 'text-indigo-600'
                                : isDark
                                    ? 'text-slate-500 hover:text-slate-300'
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}