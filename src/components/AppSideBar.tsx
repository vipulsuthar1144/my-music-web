import { globleTransitionTime } from "@/theme/utils/globalTransitions";
import { appLogo } from "@assets/images";
import ImageComp from "@components/design/Image";
import OverlaySidebar from "@components/design/Overlay";
import {
  AccountCircle,
  AccountCircleOutlined,
  Home,
  HomeOutlined,
  LibraryMusic,
  LibraryMusicOutlined,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const AppSideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapse, setCollapse] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>("/");

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

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
      id: "/collection",
      name: "Your Library",
      icon: <LibraryMusicOutlined />,
      filledIcon: <LibraryMusic />,
    },
    {
      id: "/user/me",
      name: "Profile",
      icon: <AccountCircleOutlined />,
      filledIcon: <AccountCircle />,
    },
  ];

  const handleMenuItemClick = (to: string) => navigate(to, { replace: false });

  return (
    <>
      <OverlaySidebar isShown={isCollapse} />
      <Sidebar
        rootStyles={{
          zIndex: 11,
          borderWidth: 0,
          position: "fixed",
          left: 0,
          top: 0,
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "transparent",
            height: "100vh",
          },
        }}
        collapsed={isCollapse}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <ImageComp
            img={appLogo}
            alt="Spotify"
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: 15,
              left: 20,
              zIndex: 10,
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
                boxSizing: "border-box",
                transition: `transform  ${globleTransitionTime}, padding-left ${globleTransitionTime}`,
                marginTop: "0.3rem",
                // fontSize: "1rem",

                ":hover": {
                  backgroundColor: "inherit",
                  transform: "scale(1.07)",
                  paddingLeft: "2rem",
                  fontFamily: "Ubuntu-medium",
                  color: `${theme.palette.text.primary}`,
                },
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={
                  hoveredItem === index || selectedItem === item.id
                    ? item.filledIcon
                    : item.icon
                }
                style={{
                  userSelect: "none",
                  color:
                    hoveredItem === index || selectedItem === item.id
                      ? `${theme.palette.text.primary}`
                      : `${theme.palette.text.secondary}`,
                  fontFamily:
                    hoveredItem === index || selectedItem === item.id
                      ? "Ubuntu-medium"
                      : "Ubuntu-regular",
                }}
                onClick={() => {
                  handleMenuItemClick(item.id);
                  setSelectedItem(item.id);
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
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
