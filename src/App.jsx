import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items"
import Cart from "./pages/Cart"
import "./App.css"

const App = () => {
  return (
    <div>
      <div className="max-w-full">
        <div class = "app">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>)
};

export default App;
