import React from 'react';

import About from '../pages/About';
import Home from '../pages/Home';

const ROUTES = [
  {
    path: '/',
    key: 'HOME_PAGE',
    exact: true,
    component: <Home />,
  },
  {
    path: '/about',
    key: 'ABOUT_PAGE',
    exact: true,
    component: <About />,
  },
];
export default ROUTES;
