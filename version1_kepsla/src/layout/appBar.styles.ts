export const appBarStyles = {
  appBar: (drawerWidth: string) => ({
    width: `calc(100vw - ${drawerWidth})`,
    transition: "width 0.3s ease-in-out",
    backgroundColor: "background.paper",
  }),

  iconButton: {
    marginInline: 1,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
};
