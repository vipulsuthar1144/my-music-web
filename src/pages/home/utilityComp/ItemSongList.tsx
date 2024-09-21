import { img1 } from "@assets/images";
import ImageComp from "@components/Image";
import { AccessTimeRounded } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";

const ItemSongList = () => {
  const classes = useStyle();
  return (
    <Card sx={{ backgroundColor: "transparent", backgroundImage: "none", boxShadow: "none" }} className={classes.root}>
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "12px",
          paddingY: "8px",
          paddingX: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* <Box sx={{ position: "relative", aspectRatio: 1 }}> */}
        {/* <CardMedia
            component="img"
            image={img1}
            alt="green iguana"
            sx={{
              objectFit: "fill",
              cursor: "pointer",
              height: "40px",
              aspectRatio: 1,
              boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
              // borderRadius: "8px",
              borderRadius: "5px",
            }}
          /> */}
        <ImageComp
          img={img1}
          alt={"album"}
          style={{
            width: "40px",
            aspectRatio: 1,
            cursor: "pointer",
            borderRadius: "5px",
            boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
          }}
        />
        {/* </Box> */}
        <CardContent sx={{ padding: 0, m: 0, flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="subtitle1" color="text.primary" mb={"2px"}>
              Arijit Singh
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Artist
            </Typography>
          </Box>
          <Stack direction={"row"} gap={"10px"} sx={{ boxSizing: "border-box" }}>
            {/* <StyledFavoriteIconOutlined /> */}

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <AccessTimeRounded sx={{ fontSize: "20px", color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                23:22
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemSongList;

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    borderRadius: "5px",
    boxSizing: "border-box",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
