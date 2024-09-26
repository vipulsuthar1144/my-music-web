import { TextButtonPrimary } from "@components/Button";
import { Box, Typography } from "@mui/material";
import { IGlobleImageProps, IGlobleTitleSeeAllProps } from "@utils/globleTypes";

const ImageComp = ({ img, alt, style, onClick, isPreventClickEffect = false }: IGlobleImageProps) => {
  // return <img src={img} alt={alt} style={{ height: "auto", objectFit: "contain",
  //   // backgroundColor: mColors.red,
  //   ...style }} />;

  //      xl: 1536,
  //      lg: 1200,
  //      md: 900,
  //      sm: 600,
  //      xs: 0,

  return (
    <Box
      onClick={onClick}
      onMouseDown={(event) => isPreventClickEffect && event.stopPropagation()}
      component="img"
      src={img}
      alt={alt}
      loading="lazy"
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
  );
};

export default ImageComp;

const TitleSeeAll = ({ varient = "h3", title, btnText = "See all", onClick, style }: IGlobleTitleSeeAllProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", ...style }}>
      <Typography variant={varient}>{title}</Typography>
      <TextButtonPrimary label={btnText} onClick={onClick} />
    </Box>
  );
};
export { TitleSeeAll };
