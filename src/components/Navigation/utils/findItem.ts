import { NavigationItems } from "../items.ts";

export const findItem = (path: string) =>
  NavigationItems.find((item) => path.endsWith(item.toLowerCase())) ??
  NavigationItems[0];
