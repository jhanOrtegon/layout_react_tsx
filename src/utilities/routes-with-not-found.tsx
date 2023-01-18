import { Routes, Route } from 'react-router-dom';
import { useStore } from '@/hooks';

interface props {
    children: JSX.Element[] | JSX.Element
}

export const RoutesWithNotFound = ({ children }: props) => {
    const { user, login } = useStore()

    return (
        <Routes>
            {children}
            <Route path='/*' element={<>404 no found</>} />
        </Routes>
    )
}