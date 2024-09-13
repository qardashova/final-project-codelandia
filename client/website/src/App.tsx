import { Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import Catalog from "./pages/catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
