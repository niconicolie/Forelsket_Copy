import { useEffect, useRef, useState } from "react";
import { type Props } from "../types/PropsPage.type";
import { RouteType } from "../types/Navigation.type";
import basket from "../assets/basket.svg"
import user from "../assets/user.svg"
import search from "../assets/search.svg"
import "../styles/header.css";

export const Header = ({ isMobile, handleNavigation }: Props) => {
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopDropdown(false);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMobileDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* header desktop */}
      <div className="header hidden md:flex h-[64px] items-center justify-between px-6 py-4 relative">

        <div className="flex items-center min-w-fit">
          <h1 className="title-header text-xl font-bold" onClick={() => handleNavigation(RouteType.HOME)}>FORELSKET</h1>
        </div>

        <div className="flex-1 flex justify-center">

          <div className="relative w-full max-w-[320px]">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <img src={search} className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px]" />
          </div>

        </div>

        <div className="flex items-center gap-4 min-w-fit relative">
          <button type="button" className="btn-ico-header">
            <img
              src={basket}
              className="h-[22px]"
            />
          </button>

          <div className="relative" ref={desktopDropdownRef}>
            <button
              type="button"
              className="btn-ico-header"
              onClick={() => setOpenDesktopDropdown(!openDesktopDropdown)}
            >
              <img src={user} className="h-[26px]" />
            </button>

            <div
              className={`dropdown absolute right-0 top-[56px] w-[160px] overflow-hidden transition-all duration-200 z-50 ${
                openDesktopDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.ACCOUNT)}>
                Account
              </button>

              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.ORDERS)}>
                My Orders
              </button>

              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.HELP)}>
                Help & Support
              </button>

              <button className="dropdown-item text-[#AA336A]" onClick={() => handleNavigation(RouteType.LOGOUT)}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* header mobile */}
      <div className="header flex md:hidden w-full h-[64px] items-center justify-between px-4 gap-4 relative">
        
        <div className="flex items-center min-w-fit">
          <h1 className="title-header text-lg font-bold" onClick={() => handleNavigation(RouteType.HOME)}>FORELSKET</h1>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-[320px]">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <img
              src={search}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-fit relative">
          <button type="button" className="btn-ico-header">
            <img
              src={basket}
              className="h-[22px]"
            />
          </button>
          {/* TODO: se não estiver logado, vai direcionar para rota LOGIN */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              type="button"
              className="btn-ico-header"
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
            >
              <img src={user} className="h-[26px]" />
            </button>

            <div
              className={`dropdown absolute right-0 top-[56px] w-[160px] overflow-hidden transition-all duration-200 z-50 ${
                openMobileDropdown
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.ACCOUNT)}>
                Account
              </button>

              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.ORDERS)}>
                My Orders
              </button>

              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.HELP)}>
                Help & Support
              </button>
                
              <button className="dropdown-item text-[#AA336A]" onClick={() => handleNavigation(RouteType.LOGOUT)}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
