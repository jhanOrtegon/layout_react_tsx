import { useStore } from '@/hooks';
import { roles, privateRoutes, publicRoutes } from '@/types';
import { Outlet, Navigate } from 'react-router-dom';

type props = {
    role: roles
}

export const RoleGuards = ({ role }: props) => {
    const { login } = useStore()
    console.log('entro', role)
    console.log('login.role', login.role)
    return login.role === role ? <Outlet /> : <Navigate replace to={`${publicRoutes.LOGIN}`} />

}