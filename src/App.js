import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
