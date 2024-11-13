import { globleTransitionTime } from "@/theme/utils/globalTransitions";
import { mColors } from "@/theme/utils/mColors";
import { AccountCircle, AccountCircleOutlined, Home, HomeOutlined, Search, SearchOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppBottomNavigation = () => {
  const [value, setValue] = React.useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const menuItems = [
    {
      id: "/",
      name: "Dashboard",
      icon: <HomeOutlined />,
      filledIcon: <Home />,
    },
    { id: "/search", name: "Search", icon: <SearchOutlined />, filledIcon: <Search /> },
    { id: "/user/me", name: "My Profile", icon: <AccountCircleOutlined />, filledIcon: <AccountCircle /> },
  ];

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 11, backgroundColor: mColors.EbonyBlack, color: "text.primary", overflow: "hidden" }}
      value={value}
      onChange={handleChange}
    >
      {menuItems.map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={""}
          value={item.id}
          icon={item.id == value ? item.filledIcon : item.icon}
          sx={{
            color: "text.secondary",
            transition: `transform  ${globleTransitionTime}`,
            "&.Mui-selected": { color: "text.primary", transform: "scale(1.2)" },
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default AppBottomNavigation;
