import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, roles } from '@/types';
import { AuthGuards, RoleGuards } from '@/guards';
import { RoutesWithNotFound } from '@/utilities';
import { Suspense, lazy } from 'react';
import { Spinner } from '@/components';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { Home } from './pages';

const Login = lazy(() => import('@/pages/public/auth/login/Login'))
const Private = lazy(() => import('@/pages/private/Private'))

const App = () => (

  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWithNotFound>

          <Route path='/' element={<Navigate to={publicRoutes.LOGIN} />} />
          <Route path={publicRoutes.LOGIN} element={<Login />} />

          <Route element={<AuthGuards />}>
            <Route path={`${privateRoutes.DASHBOARD}`} element={<Private />} />
          </Route>

          <Route element={<RoleGuards role={roles.ADMIN} />}>
            <Route path={`${privateRoutes.DASHBOARD}/*`} element={<Home />} />
          </Route>



        </RoutesWithNotFound>
      </BrowserRouter>
    </Provider>
  </Suspense>

)




export default App