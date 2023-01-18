import { Routes, Route } from 'react-router-dom';

interface props {
    children: JSX.Element[] | JSX.Element
}

export const RoutesWithNotFound = ({ children }: props) => {
    return (
        <Routes>
            {children}
            <Route path='/*' element={<>404 no found</>} />
        </Routes>
    )
}