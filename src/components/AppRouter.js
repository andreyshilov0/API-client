import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import Admin from '../pages/Admin';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={'/'} />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRouter;
