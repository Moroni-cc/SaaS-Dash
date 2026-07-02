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
                'https://i.pinimg.com/736x/41/d2/15/41d215d8fa7527b1909721fdf0262cb6.jpg'
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