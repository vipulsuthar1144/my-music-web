import { imgSpotifyGreenLogin, imgSpotifyGreenSideBarLogo } from "@assets/images";
import ImageComp from "@components/Image";
import Overlay from "@components/Overlay";
import {
  AccountCircle,
  AccountCircleOutlined,
  Favorite,
  FavoriteBorder,
  Headphones,
  HeadphonesOutlined,
  Home,
  HomeOutlined,
  Search,
  SearchOutlined,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { globleTransitionTime } from "@utils/styles";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";

const AppSideBar = () => {
  const theme = useTheme();
  const [isCollapse, setCollapse] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const menuItems = [
    { name: "Dashboard", icon: <HomeOutlined />, filledIcon: <Home /> },
    { name: "Search", icon: <SearchOutlined />, filledIcon: <Search /> },
    { name: "Favorite Songs", icon: <FavoriteBorder />, filledIcon: <Favorite /> },
    { name: "Recently Played", icon: <HeadphonesOutlined />, filledIcon: <Headphones /> },
    { name: "Settings", icon: <SettingsOutlined />, filledIcon: <Settings /> },
    { name: "My Profile", icon: <AccountCircleOutlined />, filledIcon: <AccountCircle /> },
  ];

  return (
    <>
      <Overlay isShown={isCollapse} />
      <Sidebar
        rootStyles={{
          zIndex: 11,
          borderWidth: 0,
          position: "fixed",
          [`.${sidebarClasses.container}`]: {
            // backgroundColor: "rgba(12,11,26,0.7)",
            backgroundColor: "transparent",
            // backdropFilter: "blur(2px)",
            height: "100vh",
          },
        }}
        transitionDuration={200}
        collapsed={isCollapse}
      >
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", position: "relative" }}>
          <ImageComp
            img={imgSpotifyGreenSideBarLogo}
            alt="Spotify"
            style={{
              width: "50px",
              position: "absolute",
              top: 20,
              left: 20,
            }}
          />
          <Menu
            onMouseEnter={() => {
              setCollapse(false);
            }}
            onMouseLeave={() => {
              setCollapse(true);
            }}
            menuItemStyles={{
              button: {
                color: `${theme.palette.text.secondary}`,
                boxSizing: "border-box",
                transition: `transform  ${globleTransitionTime}, margin-left ${globleTransitionTime}`,
                marginTop: "0.3rem",
                fontSize: "0.9rem",
                // fontFamily: ["Ubuntu-semibold"].join(","),
                ":hover": {
                  backgroundColor: "inherit",
                  transform: "scale(1.04)",
                  marginLeft: "0.4rem",
                  fontWeight: "600",
                  color: `${theme.palette.text.primary}`,
                },
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} icon={hoveredItem === index ? item.filledIcon : item.icon} onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Sidebar>
    </>
  );
};

export default AppSideBar;
