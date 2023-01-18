import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import ShopCart from "./pages/ShopCart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Home />} />
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shopCart" element={<ShopCart />} />
      </Route>
    </Routes>
  );
}

export default App;
