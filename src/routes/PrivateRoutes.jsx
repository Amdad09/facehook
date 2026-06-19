import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Common/Header';
const PrivateRoutes = () => {
    const { auth } = useAuth();
    return (
        <div>
            {auth?.user ? (
                <main className="mx-auto max-w-255 py-8">
                    <div className="container">
                        <Header/>
                        <Outlet />
                    </div>
                </main>
            ) : (
                <Navigate to="./login" />
            )}
        </div>
    );
};

export default PrivateRoutes;
