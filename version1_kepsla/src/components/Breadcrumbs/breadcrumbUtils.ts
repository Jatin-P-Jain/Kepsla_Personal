// breadcrumbUtils.ts
export const findLabelInItems = (path: string, items: any[]): string | null => {
  for (const item of items) {
    if (item.path === path) {
      return item.text;
    }
    if (item.children) {
      const label = findLabelInItems(path, item.children);
      if (label) {
        return label;
      }
    }
  }
  return null;
};

export const findBreadcrumbLabel = (
  path: string,
  menuItems: any[]
): string | null => {
  const menuLabel = findLabelInItems(path, menuItems);
  return menuLabel;
};
