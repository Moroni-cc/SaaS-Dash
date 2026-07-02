import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute() {
    const { user, isAllowedUser } = useContext(AuthContext);

    if (!user || !isAllowedUser(user?.email)) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}