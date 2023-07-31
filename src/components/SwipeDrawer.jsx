// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import HeaderBar from "./HeaderBar";
// import NavList from "./NavList";

// const drawerWidth = 220;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));



// function SwipeDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawer = () => {
//     setOpen((prevState) => !prevState);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <HeaderBar open={open} handleDrawer={handleDrawer} />
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader></DrawerHeader>
//         <NavList />
//       </Drawer>
//     </Box>
//   );
// }

// export default SwipeDrawer;


import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import HeaderBar from "./HeaderBar";
import NavList from "./NavList";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SwipeDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  // Add a media query listener to toggle the drawer open state
  React.useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the open state based on the current screen width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar open={open} handleDrawer={handleDrawer} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <NavList />
      </Drawer>
    </Box>
  );
}

export default SwipeDrawer;
