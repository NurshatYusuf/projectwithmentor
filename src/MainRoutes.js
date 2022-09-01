import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import EditProductPage from "./pages/EditProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AdminPage from "./pages/AdminPage";
import PreviewImage from "./components/products/PreviewImage";
import CartPage from "./pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 4,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 7,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 9,
    },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
