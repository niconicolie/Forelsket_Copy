import { useEffect, useRef, useState } from "react";
import basket from "../assets/basket.svg"
import user from "../assets/user.svg"
import search from "../assets/search.svg"
import "../styles/header.css";

export const Header = () => {
 const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
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
      <div className="header hidden md:flex h-[64px] items-center justify-between px-6 py-4">

        <div className="flex items-center min-w-fit">
          <h1 className="title-header text-xl font-bold">FORELSKET</h1>
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

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="btn-ico-header"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <img src={user} className="h-[26px]" />
            </button>

            <div
              className={`dropdown absolute right-0 top-[56px] w-[160px] overflow-hidden transition-all duration-200 z-50 ${
                openDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <button className="dropdown-item">
                Account
              </button>

              <button className="dropdown-item">
                My Orders
              </button>

              <button className="dropdown-item">
                Help & Support
              </button>

              <button className="dropdown-item text-[#AA336A]">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* header mobile */}
      <div className="header flex md:hidden w-full h-[64px] items-center justify-between px-4 gap-4 relative">
        
        <div className="flex items-center min-w-fit">
          <h1 className="title-header text-lg font-bold">FORELSKET</h1>
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

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="btn-ico-header"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <img src={user} className="h-[26px]" />
            </button>

            <div
              className={`dropdown absolute right-0 top-[56px] w-[160px] overflow-hidden transition-all duration-200 z-50 ${
                openDropdown ?
                  "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                <button className="dropdown-item">
                  Account
                </button>

                <button className="dropdown-item">
                  My Orders
                </button>

                <button className="dropdown-item">
                  Help & Support
                </button>

                <button className="dropdown-item text-[#AA336A]">
                  Logout
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
