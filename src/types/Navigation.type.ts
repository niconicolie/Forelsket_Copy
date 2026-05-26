export const RouteType = {
  LOGIN: "LOGIN",
  JOIN: "JOIN",
  HOME: "HOME",
  SETTINGS: "SETTINGS",
  ERROR: "ERROR",
} as const;

export type RouteType = (typeof RouteType)[keyof typeof RouteType];

export const routes: Record<RouteType, string> = {
  [RouteType.LOGIN]: "/login",
  [RouteType.JOIN]: "/join",
  [RouteType.HOME]: "/",
  [RouteType.SETTINGS]: "/settings",
  [RouteType.ERROR]: "/error",
};

export type NavigationOptions = {
  profileId?: string;
};
