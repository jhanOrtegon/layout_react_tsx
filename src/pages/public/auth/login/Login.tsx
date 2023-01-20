import { useLogin, useStore } from "@/hooks"
import { privateRoutes, roles } from '@/types';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { onLogin } = useLogin()
    const { login } = useStore()
    const navigate = useNavigate()

    const handleLogin = () => {
        onLogin({ id: '10', name: 'jhan', role: roles.ADMIN })
        navigate(privateRoutes.DASHBOARD, { replace: true })
    }

    useEffect(() => {
        if (login?.id) {
            navigate(privateRoutes.DASHBOARD, { replace: true })
        }
    }, [])

    return (
        <div>
            <h1>Login</h1>

            <button
                onClick={handleLogin}
            >
                Logeate
            </button>
        </div>
    )
}

export default Login

