import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useAuth } from "~hooks/useAuth";

const PrivateRoute = () => {
  const { token, user, authme } = useAuth();
  const [loading, setLoading] = useState(true);

  const context = useOutletContext();

  useEffect(() => {
    authme().then(() => {
      setLoading(false);
    });
  }, [token]);

  if (!loading) {
    return token && user ? <Outlet context={context} /> : <Navigate replace to='/login' />;
  }
};

export default PrivateRoute;
