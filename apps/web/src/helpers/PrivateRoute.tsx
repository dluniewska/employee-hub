import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSearch } from "~/hooks/useSearch";
import { useAuth } from "~hooks/useAuth";

const PrivateRoute = () => {
  const { token, user, authme } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authme().then(() => {
      setLoading(false);
    });
  }, [token]);

  if (!loading) {
    return token && user ? <Outlet context={useSearch()}/> : <Navigate replace to='/login' />;
  }
};

export default PrivateRoute;
