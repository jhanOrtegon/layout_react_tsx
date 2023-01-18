import { useStore } from '@/hooks';
import { Outlet, Navigate } from 'react-router-dom';
import { publicRoutes } from '@/types';

export const AuthGuards = () => {

    const { user, login } = useStore()

    return login.id ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />

}