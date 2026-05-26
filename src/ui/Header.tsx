import { useEffect, useRef, useState } from "react";
import { type Props } from "../types/PropsPage.type";
import { RouteType } from "../types/Navigation.type";
import basket from "../assets/basket.svg"
import user from "../assets/user.svg"
import search from "../assets/search.svg"
import heart from "../assets/heart.svg"
import "../styles/header.css";

export const Header = ({ isMobile, handleNavigation }: Props) => {
  const [basketCount, setBasketCount] = useState(0);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const clickB = () => {
    setBasketCount(basketCount + 1);
  }

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
          <h1 className="title-header text-xl font-bold" onClick={clickB}>FORELSKET</h1>
        </div>

        <div className="flex-1 flex justify-center">

          <div className="relative w-full max-w-[320px]">
            <div className="search-container">
              <input
                type="text"
                id="search"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <img src={search} className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px]" />
          </div>

        </div>

        <div className="flex items-center gap-4 min-w-fit relative">
          {/* experimental */}
          <button type="button" id="favorites" className="btn-ico-header" onClick={() => handleNavigation(RouteType.FAVORITES)}>
            <img title="favorites" src={heart} className="h-[22px] mt-1.5" />
          </button>
          
          <button type="button" id="basket" className="btn-ico-header">
            <img
              title="cart"
              src={basket}
              className="h-[22px]"
            />
            {/* TODO: contador de items no carrinho */}
            <span className={`basket-count transition-all duration-200 ${
                basketCount
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}>
              {basketCount}
            </span>
          </button>

          <div className="relative" ref={desktopDropdownRef}>
            <button
              type="button"
              id="user"
              className="btn-ico-header"
              onClick={() => setOpenDesktopDropdown(!openDesktopDropdown)}
            >
              <img title="user" src={user} className="h-[26px]" />
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

              <button className="dropdown-item text-[#E0115F]" onClick={() => handleNavigation(RouteType.LOGOUT)}>
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
                id="search-mobile"
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
          <button type="button" id="basket-mobile" className="btn-ico-header">
            <img
              title="cart"
              src={basket}
              className="h-[22px]"
            />
            {/* TODO: contador de items no carrinho */}
            <span className={`basket-count transition-all duration-200 ${
              basketCount
                ? "opacity-100 visible"
                : "opacity-0 invisible"
              }`}>
              {basketCount}
            </span>
          </button>
          {/* TODO: se não estiver logado, vai direcionar para rota LOGIN */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              type="button"
              id="user-mobile"
              className="btn-ico-header"
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
            >
              <img title="user" src={user} className="h-[26px]" />
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

              <button className="dropdown-item" onClick={() => handleNavigation(RouteType.FAVORITES)}>
                Favorites
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
