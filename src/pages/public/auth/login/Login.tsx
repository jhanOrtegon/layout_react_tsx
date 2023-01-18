import { useLogin } from "@/hooks"
import { useNavigate } from "react-router-dom"
import { privateRoutes } from '@/types';

export const Login = () => {
    const { onLogin, onLogout } = useLogin()
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate(privateRoutes.DASHBOARD, { replace: true })
        onLogin({ id: '10', name: 'jhan' })
    }

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

