import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const CustomRoutes = () => {
  const Routes = useMemo(() => {
    const authentication = false;

    return authentication ? <PrivateRoutes /> : <PublicRoutes />;
  }, []);

  return Routes;
};

export default CustomRoutes;
