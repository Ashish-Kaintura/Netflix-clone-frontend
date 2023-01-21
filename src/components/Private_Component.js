import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const Private_Component = () => {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet />:<Navigate to='/frontpage'/>
}

export default Private_Component;