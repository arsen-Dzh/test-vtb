import React from 'react';
import { Listing } from '../pages/Listing/Listing';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Login } from '../pages/Login/Login';
import { New } from '../pages/New/New';

interface IPrivateRoute {
  path: string;
  page: React.FC
}

export const privateRoutes: IPrivateRoute[] = [
  {
    path: '/new',
    page: New
  },
  {
    path: '/listing',
    page: Listing
  },
  {
    path: '/dashboard',
    page: Dashboard
  }
]