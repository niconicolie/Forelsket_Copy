import { Outlet } from "react-router-dom";
import type { Props } from "../types/PropsPage.type";
import { Header } from "../ui/Header";
import TopSlider from "../ui/TopSlider";

export const DefaultLayout = ({ isMobile, handleNavigation }: Props) => {
  return (
    <div className="h-full gap-4">
      <TopSlider />
      <Header />
      <Outlet />
    </div>
  );
};
