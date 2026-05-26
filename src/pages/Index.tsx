import { Route, Routes, useNavigate } from "react-router-dom";
import { RouteType, routes } from "../types/Navigation.type";
import { SimpleLayout } from "../layout/SimpleLayout";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "./Home";

export const Index = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();

  const handleNavigation = (routeType: RouteType) => {
    const route = routes[routeType];
    if (!route) return;

    switch (routeType) {
      case RouteType.HOME:
      default:
        navigate(route);
    }
  };

  return (
    <Routes>
      <Route element={<DefaultLayout isMobile={isMobile} handleNavigation={handleNavigation} />}>
        <Route path="/" element={<Home isMobile={isMobile} handleNavigation={handleNavigation} />} />
      </Route>
    </Routes>
  );
};
