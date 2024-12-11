import { Box, Skeleton, useTheme } from "@mui/material";
import { useIsSmallScreen } from "@utils/constants";

type TItemArtistAlbumListSkeletonProps = {
  isArtist: boolean;
};

const ItemArtistAlbumListSkeleton = ({ isArtist }: TItemArtistAlbumListSkeletonProps) => {
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  return (
    <Box sx={{ width: "100%", flexShrink: 0, flexBasis: isSmallScreen ? "160px" : "200px" }}>
      <Box sx={{ width: "100%", aspectRatio: 1 }}>
        <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", height: "100%", borderRadius: isArtist ? "50%" : "12px" }} />
      </Box>
      <Skeleton variant="text" animation="wave" sx={{ width: "60%", height: `20px`, marginTop: "5px" }} />
      <Skeleton variant="text" animation="wave" sx={{ width: "40%", height: `15px`, marginTop: "3px" }} />
    </Box>
  );
};

export default ItemArtistAlbumListSkeleton;
