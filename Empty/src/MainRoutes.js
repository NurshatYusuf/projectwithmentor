import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

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
      id: 1,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 1,
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
