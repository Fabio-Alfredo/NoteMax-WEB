import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({canActivate, redirectPath = '/'}) {
  if(!canActivate){
    return <Navigate to = {redirectPath} replace/>
  }
  return <Outlet/>
}

export default PrivateRoute;
