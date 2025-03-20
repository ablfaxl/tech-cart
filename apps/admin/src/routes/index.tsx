import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../app/_components/layout';
import { ProtectedPage } from '../app/_components/protected';
import { Dashboard } from '../app/_feat/dashboard/components/dashboard';

const DefaultRoutes = () => {
  return useRoutes([
    {
      path: 'login',
      // element: <LoginLayout />,
      children: [
        {
          path: '',
          element: (
            <div className="min-h-screen flex items-center justify-center">
              login
            </div>
          ),
        },
      ],
    },
    {
      path: '*',
      // element: <NotFound />,
      element: <Navigate to="/login" replace />,
    },
  ]);
};

const ProtectedRoute = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          children: [
            {
              path: '/dashboard',
              element: <ProtectedPage Component={() => <Dashboard />} />,
            },
            {
              path: '/invoices',
              element: <ProtectedPage Component={() => <div>invoices</div>} />,
            },
            {
              path: '/customers',
              element: <ProtectedPage Component={() => <div>customers</div>} />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <h1>404 not found</h1>,
    },
  ]);
};

export function AdminRoutes() {
  const isLogin = true; // Replace with your actual login check logic

  return isLogin ? <ProtectedRoute /> : <DefaultRoutes />;
}
