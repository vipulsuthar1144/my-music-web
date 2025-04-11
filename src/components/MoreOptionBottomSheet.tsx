import InstallAppButton from "@/pages/auth/components/InstallAppButton";
import { toggleMoreOptionBottomSheet } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  ContrastRounded,
  LogoutOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const MoreOptionBottomSheet = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { openMoreOptionBottomSheet } = useAppSelector(
    (state) => state.globleLoader
  );
  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      dispatch(toggleMoreOptionBottomSheet(isOpen));
    };

  const listenerLogOut = () => {
    localStorage.clear();
    navigate("/auth", { replace: true });
  };
  return (
    <Drawer
      anchor="bottom"
      open={openMoreOptionBottomSheet}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "secondary.main",
          backgroundImage: "none",
          // height: window.innerHeight / 1.5,
          // borderTop: "1px solid #ccc",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "10px",
        },
      }}
    >
      <Box
        role="presentation"
        onKeyDown={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
      >
        <Box
          component={"div"}
          sx={{
            width: "80px",
            height: "3px",
            bgcolor: "text.secondary",
            borderRadius: "10px",
            margin: "0px auto",
            alignSelf: "center",
          }}
        />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate(-1)}
              sx={{ padding: "10px", gap: "10px" }}
            >
              <ArrowBackIosNewRounded />
              <ListItemText primary={"Go Back"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate(1)}
              sx={{ padding: "10px", gap: "10px" }}
            >
              <ArrowForwardIosRounded />
              <ListItemText primary={"Go Forward"} />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton sx={{ padding: "10px", gap: "10px" }}>
              <ContrastRounded />
              <ListItemText primary={"Dark Mode"} />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <InstallAppButton renderKey="IS_BOTTOM_SHEET" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={listenerLogOut}
              sx={{ padding: "10px", gap: "10px" }}
            >
              <LogoutOutlined />
              <ListItemText primary={"LogOut"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MoreOptionBottomSheet;
