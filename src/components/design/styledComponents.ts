import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const RootContainer = styled(Box)({
  flex: 1,
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

export const ContainerWithoutScrollbar = styled(Box)({
  width: "100%",
  // minHeight: "150px",
  display: "flex",
  overflowX: "auto",
  // marginBottom: "10px",
  scrollbarWidth: "none",
  zIndex: 1,
  // backgroundColor: "red",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const SingleLineTypo = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
});

export const TwoLineTypo = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
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
