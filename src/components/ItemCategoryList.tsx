import { ICategory } from "@/schemas/category.schema";
import { ImageCompWithLoader } from "@components/design/Image";
import { Box, CardActionArea, Typography } from "@mui/material";
import { getRandomColor } from "@utils/genaralFunctions";
import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import { useMemo, useState } from "react";

type ItemCategoryListProps = {
  category: ICategory;
  onClick: () => void;
};

const ItemCategoryList = ({ category, onClick }: ItemCategoryListProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const bgColor = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <Box
      component={"div"}
      sx={{
        flexShrink: 0,
        // flexBasis: "450px",
        cursor: "pointer",
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: bgColor,
        aspectRatio: 2 / 1,
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <CardActionArea
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        sx={{ height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}
      >
        <Typography variant="h3" position={"relative"} style={{ fontSize: "clamp(0.6em,5em, 1.7em)", zIndex: 2 }} m={"20px"}>
          {category.name}
        </Typography>
        <ImageCompWithLoader
          img={category.icons && category?.icons[0]?.url}
          alt={"album"}
          isPreventClickEffect={false}
          style={{
            position: "absolute",
            top: "30%",
            left: "60%",
            transform: isHovered ? " rotate(-45deg) scale(1.15) " : "scale(1) rotate(-45deg)",
            width: "50%",
            aspectRatio: 1,
            zIndex: 1,
            borderRadius: "8px",
            boxShadow: "0px 10px 10px 5px rgba(0,0,0,0.4)",
            transition: `transform ${globleEaseInOutTransitionTime}`,
          }}
        />
      </CardActionArea>
    </Box>
  );
};

export default ItemCategoryList;
