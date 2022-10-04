import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from '../config/routes';

export default function Routers() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route path={route.path} key={route.key} element={route.component} />
      ))}
    </Routes>
  );
}
