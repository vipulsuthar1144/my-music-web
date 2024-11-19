import { imgDefaultSong } from "@assets/images";
import { TextButtonPrimary } from "@components/design/Button";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { getRandomColor } from "@utils/genaralFunctions";
import { CSSProperties, useMemo, useState } from "react";

export interface IGlobleImageProps {
  img?: string;
  alt: string;
  errorImage?: string;
  style?: SxProps<Theme>;
  isPreventClickEffect?: boolean;
  onClick?: (e: any) => void;
}

export interface IGlobleTitleSeeAllProps {
  varient?: Variant | "inherit";
  title: string;
  btnText?: string;
  isSeeAllBtnVisible?: boolean;
  style?: CSSProperties;
  onSeeAllClick?: (e: any) => void;
}

const ImageComp = ({
  img,
  alt,
  style,
  onClick,
  isPreventClickEffect = false,
}: IGlobleImageProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        onMouseDown={(event) => isPreventClickEffect && event.stopPropagation()}
        component="img"
        src={img}
        alt={alt}
        // loading="lazy"
        draggable={false}
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

const ImageCompWithLoader = ({
  img,
  alt,
  style,
  onClick,
  errorImage = imgDefaultSong,
  isPreventClickEffect = false,
}: IGlobleImageProps) => {
  const [imgSrc, setImgSrc] = useState(img);
  const [isLoading, setIsLoading] = useState(true);

  const color = useMemo(() => {
    return getRandomColor();
  }, []);
  return (
    <Box
      sx={{
        width: "30%",
        height: "auto",
        overflow: "hidden",
        boxSizing: "border-box",
        ...style,
        backgroundColor: color,
      }}
    >
      <Box
        onClick={onClick}
        onMouseDown={(event) => isPreventClickEffect && event.stopPropagation()}
        component="img"
        // draggable={false}
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

const TitleSeeAll = ({
  varient = "h3",
  title,
  btnText = "See all",
  onSeeAllClick,
  style,
  isSeeAllBtnVisible = true,
}: IGlobleTitleSeeAllProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        ...style,
      }}
    >
      <Typography variant={varient}>{title}</Typography>
      {isSeeAllBtnVisible && (
        <TextButtonPrimary label={btnText} onClick={onSeeAllClick} />
      )}
    </Box>
  );
};
export { ImageCompWithLoader, TitleSeeAll };
