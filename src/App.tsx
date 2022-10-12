import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authData } from "./Componenents/Global/Global";
import { Protected } from "./Componenents/Global/Protected";
import Header from "./Componenents/Header/Header";
import DisplayScreen from "./Componenents/Screens/DisplayScreen";
import { useRecoilValue } from "recoil";
import CartSCreen from "./Componenents/Screens/CartSCreen";

const App = () => {
  const user = useRecoilValue(authData);
  return (
    <div>
      <BrowserRouter>
        {user ? <Header /> : null}
        <Routes>
          <Route path="/" element={<Protected />} />
          <Route path="/cart" element={<CartSCreen />} />
          <Route path="/display" element={<DisplayScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
