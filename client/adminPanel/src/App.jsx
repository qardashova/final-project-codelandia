import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Users from "./pages/adminPanel/users";
import PublicRoutes from "./routes/PublicRoutes";
import Login from "./pages/auth";
import InnerLayout from "./layout/InnerLayout";
import Products from "./pages/adminPanel/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<InnerLayout />}>
          <Route path="/" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Route>
      <Route path="/login" element={<PublicRoutes />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
