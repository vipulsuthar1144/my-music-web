import { Box, Skeleton } from "@mui/material";

const ItemPlaylistTrackListSkeleton = () => {
  return (
    <Box sx={{ paddingY: "8px", paddingX: "20px", height: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "12px" }}>
      <Skeleton variant="text" animation="wave" sx={{ minWidth: "25px", height: `25px` }} />
      <Skeleton variant="rectangular" animation="wave" sx={{ width: "60px", height: `50px`, borderRadius: "5px" }} />
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ flex: 1, minWidth: "40%", maxWidth: "40%" }}>
          <Skeleton variant="text" animation="wave" sx={{ width: "90%", height: `25px`, marginTop: "3px" }} />
          <Skeleton variant="text" animation="wave" sx={{ width: "30%", height: `15px`, marginTop: "3px" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" animation="wave" sx={{ width: "90%", height: `25px` }} />
        </Box>
        <Box sx={{ flex: 0.5 }}>
          <Skeleton variant="text" animation="wave" sx={{ width: "90%", height: `25px` }} />
        </Box>
        <Skeleton variant="text" animation="wave" sx={{ width: "5%", height: `30px` }} />
      </Box>
    </Box>
  );
};

export default ItemPlaylistTrackListSkeleton;
