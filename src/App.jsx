import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

function Layout() {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`min-h-screen flex flex-col antialiased transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50/50 text-slate-900'
      }`}>
      <Header />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Layout />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}