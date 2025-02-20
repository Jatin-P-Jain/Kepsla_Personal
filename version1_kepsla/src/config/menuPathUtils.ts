import { MenuItem } from "./navigationTypes";

export const buildPathMap = (
  items: MenuItem[],
  map: Map<string, string> = new Map()
): Map<string, string> => {
  items.forEach((item) => {
    map.set(item.path, item.text);
    if (item.children) {
      buildPathMap(item.children, map);
    }
  });
  return map;
};
