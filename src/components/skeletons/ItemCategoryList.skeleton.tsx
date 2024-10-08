import { Box, Skeleton } from "@mui/material";

const ItemCategoryListSkeleton = () => {
  return (
    <Box sx={{ width: "100%", borderRadius: "8px", aspectRatio: 2 / 1, overflow: "hidden" }}>
      <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", height: `100%` }} />
    </Box>
  );
};

export default ItemCategoryListSkeleton;
