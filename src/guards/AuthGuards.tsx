import { useStore } from '@/hooks';
import { Outlet, Navigate } from 'react-router-dom';
import { publicRoutes } from '@/types';

export const AuthGuards = () => {

    const { login } = useStore()

    console.log(login.id, 'login.id');

    return login.id ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />

}