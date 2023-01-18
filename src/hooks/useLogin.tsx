import { login, logOut } from '@/redux/slices'
import { useDispatch } from 'react-redux';
import { Login } from '@/types';

export const useLogin = () => {

    const dispatch = useDispatch()

    const onLogin = (newLogin: Login) => {
        dispatch(login(newLogin))
    }

    const onLogout = () => {
        dispatch(logOut())
    }

    return {
        onLogin,
        onLogout
    }

}