import React from "react";
import { Provider } from "react-redux";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { products } from "../data.json";
import { UserProvider } from "./Context";

function App() {
  return (
    <div className="wrapper flex space-between">
      <UserProvider value={{ products: products }}>
        <Sidebar />
        <Main />
      </UserProvider>
      <Cart />
    </div>
  );
}

export default App;
