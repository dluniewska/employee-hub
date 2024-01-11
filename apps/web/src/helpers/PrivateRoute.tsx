import { Navigate, Outlet } from "react-router-dom";
import { useSearch } from "~/hooks/useSearch";
import { useAuth } from "~hooks/useAuth";

const PrivateRoute = () => {
  const { token, user } = useAuth();
  return token && user ? <Outlet context={useSearch()}/> : <Navigate replace to='/login' />;
};

export default PrivateRoute;
