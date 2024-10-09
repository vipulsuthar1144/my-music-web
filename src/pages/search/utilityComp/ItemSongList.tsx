import { IArtistSchema } from "@/schemas/artist.schema";
import { ImageCompWithLoader } from "@components/Image";
import { SingleLineTypo } from "@components/styledComponents";
import { AccessTimeRounded } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { msToTimeConvert } from "@utils/genaralFunctions";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import { useNavigate } from "react-router-dom";

type ItemSongListProps = {
  title?: string;
  subtitle?: string;
  subtitleArr?: IArtistSchema[];
  trackDuration?: number;
  img?: string;
  onClick?: () => void;
};

const ItemSongList = ({ title, img, subtitleArr, subtitle, onClick, trackDuration }: ItemSongListProps) => {
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <Card sx={{ backgroundColor: "transparent", backgroundImage: "none", boxShadow: "none" }} className={classes.root}>
      <CardActionArea
        onClick={onClick}
        sx={{
          width: "100%",
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
          img={img}
          alt={"track"}
          style={{
            width: "50px",
            aspectRatio: 1,
            borderRadius: "5px",
            boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
          }}
        />
        <CardContent sx={{ padding: 0, m: 0, flex: 1, width: "calc(100% - 80px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box component={"div"} sx={{ flex: 1, maxWidth: "70%" }}>
            <SingleLineTypo variant="subtitle1" color="text.primary" mb={"2px"}>
              {title}
            </SingleLineTypo>
            <SingleLineTypo variant="subtitle2" color="text.secondary">
              {subtitle}
              {subtitleArr?.map((item) => (
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
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <AccessTimeRounded sx={{ fontSize: "20px", color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {msToTimeConvert(trackDuration || 0)}
            </Typography>
          </Box>
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
