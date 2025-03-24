import {Navigate, Outlet} from 'react-router-dom';
export const ProtectedRoutes = ()=>{
    const token = null;
    return token ? <Outlet/>: <Navigate to="/login"/>
}
