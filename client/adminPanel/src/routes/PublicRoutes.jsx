import { useEffect } from "react";
import { useAppSelector } from "../redux/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const PublicRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isAuth) {
      if (location.state) {
        navigate(location.state);
        return;
      }
      navigate("/");
    }
  }, [isAuth]);

  return isAuth === false ? <Outlet /> : null;
};

export default PublicRoutes;
