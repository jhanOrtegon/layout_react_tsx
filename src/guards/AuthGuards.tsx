import { useStore } from '@/hooks';
import { Outlet, Navigate } from 'react-router-dom';
import { publicRoutes } from '@/types';

export const AuthGuards = () => {

    const { user } = useStore()

    return !user.id ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />

}
