import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const GuardedRoute = ({ isAllowed, redirectPath, children }) => {
   if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
   } else {
      return children || <Outlet />;
   }
}

export default GuardedRoute