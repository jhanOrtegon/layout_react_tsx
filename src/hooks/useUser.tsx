import { useDispatch, useSelector } from "react-redux"
import { createUser, updateUser, resetUser } from '@/redux/slices/user'
import { User } from '@/models';

export const useUser = () => {
    const dispatch = useDispatch();
    const getUserStore = useSelector((state: any) => state.user)

    const onCreateUser = (newUser: User) => {
        dispatch(createUser(newUser))
    }

    const onUpdateUser = (newUser: User) => {
        dispatch(updateUser(newUser))
    }

    const onResetUser = () => {
        dispatch(resetUser())
    }

    return {
        onCreateUser,
        onUpdateUser,
        onResetUser,
        getUserStore
    }
}