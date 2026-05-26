import { RouteType, type NavigationOptions } from "./Navigation.type";

export type Props = {
  isMobile: boolean;
  handleNavigation: (routeType: RouteType, options?: NavigationOptions) => void
}