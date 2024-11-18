import { globleTransitionTime } from "@/theme/utils/globalTransitions";
import { mColors } from "@/theme/utils/mColors";
import {
  AccountCircle,
  AccountCircleOutlined,
  FeaturedPlayList,
  FeaturedPlayListOutlined,
  Home,
  HomeOutlined,
  PlayArrow,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Theme,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const AppBottomNavigation = () => {
  const [value, setValue] = React.useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyle();

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    newValue && navigate(newValue);
  };

  const menuItems = [
    {
      id: "/",
      name: "Dashboard",
      icon: <HomeOutlined />,
      filledIcon: <Home />,
    },
    {
      id: "/search",
      name: "Search",
      icon: <SearchOutlined />,
      filledIcon: <Search />,
    },
    {
      id: "",
      name: "",
      // icon: <SearchOutlined />,
      // filledIcon: <Search />,
    },
    {
      id: "/user/me/playlist",
      name: "Playlist",
      icon: <FeaturedPlayListOutlined />,
      filledIcon: <FeaturedPlayList />,
    },
    {
      id: "/user/me",
      name: "My Profile",
      icon: <AccountCircleOutlined />,
      filledIcon: <AccountCircle />,
    },
  ];

  return (
    <BottomNavigation
      // className={classes.root}
      value={value}
      onChange={handleChange}
      sx={{
        // width: "fit-content",
        position: "fixed",
        bottom: "10px",
        left: "15px",
        right: "15px",
        zIndex: 11,
        borderRadius: "30px",
        padding: "6px 10px",
        height: "auto",
        backgroundColor: mColors.EbonyBlack,
        // backgroundColor: "aqua",
        justifyContent: "space-around",
        alignItems: "center",
        color: "text.primary",
        // overflow: "hidden",
        // boxShadow: "0px -2px 10px rgba(255,255,255,0.5)",
      }}
    >
      <Box component={"div"} className={classes.floatingButtonWrapper}>
        <BottomNavigationAction
          label="player"
          value={"/player"}
          icon={<PlayArrow style={{ fontSize: 40, color: "black" }} />}
          sx={{
            borderRadius: "50%",
            // backgroundColor: "loader.main",
          }}
        />
      </Box>
      {menuItems.map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={""}
          value={item.id}
          icon={item.id == value ? item.filledIcon : item.icon}
          // className={classes.navigationAction}
          sx={{
            // display: "block",
            // backgroundColor: "red",
            flex: 0,
            minWidth: "50px",
            maxWidth: "50px",
            minHeight: "50px",
            maxHeight: "50px",
            aspectRatio: 1,
            borderRadius: "50%",
            color: "text.secondary",
            transition: `transform  ${globleTransitionTime}`,
            "&.Mui-selected": {
              color: "text.primary",
              transform: "scale(1.2)",
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default AppBottomNavigation;

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    // width: "fit-content",
    position: "fixed",
    bottom: "10px",
    left: "15px",
    right: "15px",
    zIndex: 11,
    borderRadius: "30px",
    padding: "6px 10px",
    height: "auto",
    backgroundColor: mColors.EbonyBlack,
    // backgroundColor: "aqua",
    justifyContent: "space-around",
    alignItems: "center",
    color: "text.primary",
    // overflow: "hidden",
    // boxShadow: "0px -2px 10px rgba(255,255,255,0.5)",
  },
  navigationAction: {
    // display: "block",
    // backgroundColor: "red",
    flex: 0,
    minWidth: "50px",
    maxWidth: "50px",
    minHeight: "50px",
    maxHeight: "50px",
    aspectRatio: 1,
    borderRadius: "50%",
    color: theme.palette.text.secondary,
    transition: `transform  ${globleTransitionTime}`,
    "&.Mui-selected": {
      color: theme.palette.text.primary,
      transform: "scale(1.2)",
    },
  },
  floatingButtonWrapper: {
    position: "absolute",
    bottom: "80%",
    left: "50%",
    maxWidth: "60px",
    maxHeight: "60px",
    aspectRatio: 1,
    transform: "translate(-50%, 50%)",
    zIndex: 1,
    backgroundColor: mColors.loaderPrimary,
    borderRadius: "50%",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
