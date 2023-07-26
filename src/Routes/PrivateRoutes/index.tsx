import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTES } from './routes';

const PrivateRoutes = () => {
  return <Routes></Routes>;
};

export default memo(PrivateRoutes);
