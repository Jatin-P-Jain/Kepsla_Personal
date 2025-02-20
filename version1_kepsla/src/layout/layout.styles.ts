export const layoutStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
  },
  mainContent: (drawerWidth: string) => ({
    padding: 3,
    marginLeft: drawerWidth,
    transition: "margin-left 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flexGrow: 1,
    justifyContent: "space-between",
  }),
};
