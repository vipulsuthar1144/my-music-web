import { img1, imgDefaultArtist, imgDefaultSong } from "@assets/images";
import { TextButtonPrimary } from "@components/Button";
import { Box, Skeleton, Typography } from "@mui/material";
import { getRandomColor } from "@utils/genaralFunctions";
import { IGlobleImageProps, IGlobleTitleSeeAllProps } from "@utils/globleTypes";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const ImageComp = ({ img, alt, style, onClick, isPreventClickEffect = false }: IGlobleImageProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        onMouseDown={(event) => isPreventClickEffect && event.stopPropagation()}
        component="img"
        src={img}
        alt={alt}
        // loading="lazy"
        sx={{
          width: "30%",
          maxWidth: "100%",
          height: "auto",
          boxSizing: "border-box",
          objectFit: "fill",
          userSelect: "none",
          ...style,
        }}
      />
    </>
  );
};

export default ImageComp;

const ImageCompWithLoader = ({ img, alt, style, onClick, errorImage = imgDefaultSong, isPreventClickEffect = false }: IGlobleImageProps) => {
  const [imgSrc, setImgSrc] = useState(img);
  const [isLoading, setIsLoading] = useState(img ? true : false);

  const color = useMemo(() => {
    return getRandomColor();
  }, []);
  return (
    <Box sx={{ width: "30%", height: "auto", overflow: "hidden", boxSizing: "border-box", ...style, backgroundColor: color }}>
      <Box
        onClick={onClick}
        onMouseDown={(event) => isPreventClickEffect && event.stopPropagation()}
        component="img"
        src={imgSrc}
        alt={alt}
        onLoad={() => {
          setIsLoading(false);
        }}
        onError={() => {
          setImgSrc(errorImage);
          setIsLoading(false);
        }}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
          opacity: isLoading ? 0 : 1,
          userSelect: "none",
        }}
      />
    </Box>
  );
};

const TitleSeeAll = ({ varient = "h3", title, btnText = "See all", onSeeAllClick, style }: IGlobleTitleSeeAllProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", ...style }}>
      <Typography variant={varient}>{title}</Typography>
      <TextButtonPrimary label={btnText} onClick={onSeeAllClick} />
    </Box>
  );
};
export { TitleSeeAll, ImageCompWithLoader };
