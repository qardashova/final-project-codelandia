import  { useEffect } from "react";
import { useAppSelector } from "../redux/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login", { state: location.pathname });
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : null;
};

export default ProtectedRoutes;
