import { lazy } from 'react'
import { privateRoutes } from '@/types';
import { Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from '@/utilities';

const Home = lazy(() => import('@/pages/private/dashboard/home/Home'))

const Private = () => {

    return (
        <RoutesWithNotFound>
            {/* <Route path='/' element={<Navigate to={`${privateRoutes.DASHBOARD}${privateRoutes.HOME}`} />} /> */}
            <Route path={'/'} element={<Home />} />
            <Route path={privateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFound>
    )
}

export default Private