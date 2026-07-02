import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');

    const loginUser = (email, name) => {
        setUser({
            name: name || 'Alex Johnson',
            email,
            role: 'Admin Account',
            avatar:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
        });
    };

    const logoutUser = () => {
        setUser(null);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AuthContext.Provider value={{ user, theme, setUser, loginUser, logoutUser, toggleTheme }}>
            {children}
        </AuthContext.Provider>
    );
}