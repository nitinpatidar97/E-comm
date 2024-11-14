import React, { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Auth from './Auth/Auth'
import GuardedRoute from './Auth/GuardedRoute';
import ErrorPage from './ErrorPage';

const LoginLazy = lazy(() => import("./Components/Login"));
const RegisterLazy = lazy(() => import("./Components/Register"));
const MainLazy = lazy(() => import("./Main/Main"));

const AppRoutes = () => {
    return useRoutes([
        {
            path: "/*",
            element: <MainLazy />
        },
        {
            path: "/login",
            element: <LoginLazy />
        },
        {
            path: "/register",
            element: <RegisterLazy />
        },
        {
            path: '*',
            element: <ErrorPage />
        }
    ])


    return useRoutes([
        {
            path: "/",
            element: Auth() ? <Navigate to="/main" replace /> : <LoginLazy />
        },
        {
            path: "/login",
            element: <LoginLazy />
        },
        {
            path: "/register",
            element: <RegisterLazy />
        },
        {
            path: "/main/*",
            element: <GuardedRoute isAllowed={Auth()} redirectPath="/login"><MainLazy /></GuardedRoute>
        },
        {
            path: '*',
            element: <ErrorPage />
        }
    ])
}

export default AppRoutes