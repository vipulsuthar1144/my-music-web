import { Box, Skeleton } from "@mui/material";

type ItemSongListSkeletonProps = {
  haveIndex?: boolean;
};
const ItemSongListSkeleton = ({ haveIndex = false }: ItemSongListSkeletonProps) => {
  return (
    <Box sx={{ paddingY: "8px", paddingX: "12px", height: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "12px" }}>
      {haveIndex && <Skeleton variant="text" animation="wave" sx={{ width: "30px", height: `30px` }} />}
      <Skeleton variant="rectangular" animation="wave" sx={{ width: "60px", height: `50px`, borderRadius: "5px" }} />
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" animation="wave" sx={{ width: "50%", height: `25px`, marginTop: "3px" }} />
          <Skeleton variant="text" animation="wave" sx={{ width: "30%", height: `15px`, marginTop: "3px" }} />
        </Box>
        <Skeleton variant="text" animation="wave" sx={{ width: "10%", height: `30px`, marginTop: "3px" }} />
      </Box>
    </Box>
  );
};

export default ItemSongListSkeleton;
