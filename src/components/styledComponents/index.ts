import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const RootContainer = styled(Box)({
  flex: 1,
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

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

// export const CustomScrollBox = styled(Box)((theme: Theme) => ({
//   width: "100%",
//   // overflow: "hidden",
//   overflow: "hidden  auto",
//   height: "100vh",
//   borderRadius: "20px",
//   "::-webkit-scrollbar": {
//     width: "5px",
//     // height: "12px",
//     // display: "none",
//   },
//   "::-webkit-scrollbar-track": {
//     background: "transparent",
//   },
//   "::-webkit-scrollbar-thumb": {
//     background: theme.palette.text.secondary, // Thumb color
//     borderRadius: "5px",
//   },
//   "::-webkit-scrollbar-thumb:hover": {
//     // backgroundColor: theme.palette.primary.dark, // Darker color on hover
//   },
// }));
