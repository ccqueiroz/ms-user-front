import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES } from './routes';

const SignIn = lazy(() => import('../../Pages/Public/SignIn/index'));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={PUBLIC_ROUTES.signIn} element={<SignIn />} />
    </Routes>
  );
};

export default memo(PublicRoutes);
