export const RouteType = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  JOIN: "JOIN",
  ACCOUNT: "ACCOUNT",
  ORDERS: "ORDERS",
  HELP: "HELP",
  LOGOUT: "LOGOUT",
  ERROR: "ERROR",
} as const;

export type RouteType = (typeof RouteType)[keyof typeof RouteType];

export const routes: Record<RouteType, string> = {
  [RouteType.HOME]: "/",
  [RouteType.LOGIN]: "/login",
  [RouteType.JOIN]: "/join",
  [RouteType.ACCOUNT]: "/account",
  [RouteType.ORDERS]: "/orders",
  [RouteType.HELP]: "/help",
  [RouteType.LOGOUT]: "/logout",
  [RouteType.ERROR]: "/error",
};

export type NavigationOptions = {
  profileId?: string;
};
