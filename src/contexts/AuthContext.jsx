import { createContext, useState } from 'react';

const AuthContext = createContext();

const allowedUsers = [
    {
        email: 'moronicapcha30@gmail.com',
        password: 'admin123',
        name: 'Moroni Capcha',
        role: 'Admin Account',
        avatar: 'https://i.pinimg.com/736x/41/d2/15/41d215d8fa7527b1909721fdf0262cb6.jpg'
    },
    {
        email: 'Diego.Huarsaya@gmail.com',
        password: 'team123',
        name: 'Diego Huarsaya',
        role: 'Team Member',
        avatar: 'https://i.pinimg.com/1200x/6c/ee/e1/6ceee189eaac01781b810780e487da8a.jpg'
    },
    {
        email: 'google.user@gmail.com',
        password: 'google123',
        name: 'Google User',
        role: 'External Partner',
        avatar: 'https://i.pinimg.com/736x/2a/c5/3d/2ac53d3c8ad60454cb6e011e58fb9f71.jpg'
    }
];

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');

    const loginUser = (email, name, password) => {
        const normalizedEmail = email?.trim().toLowerCase();
        const normalizedPassword = password?.trim();
        const allowedUser = allowedUsers.find(
            (item) => item.email.toLowerCase() === normalizedEmail
        );

        if (!allowedUser || allowedUser.password !== normalizedPassword) {
            return false;
        }

        setUser({
            name: name?.trim() || allowedUser.name,
            email: allowedUser.email,
            role: allowedUser.role,
            avatar: allowedUser.avatar
        });

        return true;
    };

    const logoutUser = () => {
        setUser(null);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const isAllowedUser = (email) => {
        const normalizedEmail = email?.trim().toLowerCase();
        return allowedUsers.some((item) => item.email.toLowerCase() === normalizedEmail);
    };

    return (
        <AuthContext.Provider value={{ user, theme, setUser, loginUser, logoutUser, toggleTheme, isAllowedUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };