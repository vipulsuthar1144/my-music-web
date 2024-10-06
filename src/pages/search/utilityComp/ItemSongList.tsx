import { ITrackSchema } from "@/schemas/track.schema";
import { mColors } from "@/theme/utils/mColors";
import { img1, imgDefaultSong } from "@assets/images";
import ImageComp, { ImageCompWithLoader } from "@components/Image";
import { SingleLineTypo } from "@components/styledComponents";
import { AccessTimeRounded } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { msToTimeConvert } from "@utils/genaralFunctions";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import { useNavigate } from "react-router-dom";

type ItemSongListProps = {
  track?: ITrackSchema;
};

const ItemSongList = ({ track }: ItemSongListProps) => {
  const classes = useStyle();
  const navigate = useNavigate();
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
        {/* <Typography variant="subtitle1" color="text.primary" mr={"2px"}>
          1
        </Typography> */}
        <ImageCompWithLoader
          img={track?.album?.images && track?.album?.images[0]?.url}
          alt={"track"}
          style={{
            width: "50px",
            aspectRatio: 1,
            borderRadius: "5px",
            boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
          }}
        />
        <CardContent sx={{ padding: 0, m: 0, width: "80%", flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box component={"div"} sx={{ width: "75%" }}>
            <SingleLineTypo variant="subtitle1" color="text.primary" mb={"2px"}>
              {track?.name}
            </SingleLineTypo>
            <SingleLineTypo variant="subtitle2" color="text.secondary">
              {track?.artists?.map((item) => (
                <Box
                  component={"span"}
                  onMouseDown={(event) => event.stopPropagation()}
                  key={item.id}
                  onClick={() => navigate(`/artist/${item.id}`)}
                  sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline", color: "text.primary" } }}
                >
                  {` ${item.name}, `}
                </Box>
              ))}
            </SingleLineTypo>
          </Box>
          <Stack direction={"row"} gap={"10px"} sx={{ boxSizing: "border-box" }}>
            {/* <StyledFavoriteIconOutlined /> */}

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <AccessTimeRounded sx={{ fontSize: "20px", color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {msToTimeConvert(track?.duration_ms || 0)}
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
