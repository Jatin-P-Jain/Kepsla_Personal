import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuPathMap } from "../config/navigationConfig";

const useDrawerMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  const currentUrl: string = location.pathname;

  const handleNavigation = (route: string | undefined) => {
    if (route) {
      const urlTitle = menuPathMap.get(route);
      setActiveItem(urlTitle);
      navigate(route);
    }
  };

  const handleMenuClick = (menuText: string) => {
    setOpenMenu(openMenu === menuText ? null : menuText);
    const parentUrl = currentUrl.split("/").filter(Boolean)[0];
    const parentUrlTitle = menuPathMap.get("/" + parentUrl);
    const segments = currentUrl.split("/").filter(Boolean);
    const childUrl = "/" + segments.slice(0, 2).join("/");
    const childUrlTitle = menuPathMap.get(childUrl);
    openMenu ? setActiveItem(parentUrlTitle) : setActiveItem(childUrlTitle);
  };

  return {
    openMenu,
    activeItem,
    handleNavigation,
    handleMenuClick,
  };
};

export default useDrawerMenu;
