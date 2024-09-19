import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";

export const RootContainer = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

export const CustomScrollBox = styled(Box)((theme: Theme) => ({
  "::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
    display: "none",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.palette.text.secondary, // Thumb color
    // borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    // backgroundColor: theme.palette.primary.dark, // Darker color on hover
  },
}));

export const ContainerWithoutScrollbar = styled(Box)({
  width: "100%",
  display: "flex",
  overflowX: "auto",
  marginBottom: "10px",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
