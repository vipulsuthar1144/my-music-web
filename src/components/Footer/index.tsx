import { StyledFacebookIconOutlined, StyledInstagramIconOutlined, StyledTwitterIconOutlined } from "@assets/SVG";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import footerData from "../../utils/footerLinks.json";

const AppFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.firstContainer}>
        <Box className={classes.container}>
          <Typography variant="h5" fontWeight={"900"} mb={"5px"}>
            {footerData.company.title}
          </Typography>
          {footerData.company.links.map((item, index) => (
            <Box key={index} py={"2px"}>
              <Typography variant="subtitle1">
                <a className={classes.link} target="_blank" href={item.url}>
                  {item.title}
                </a>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.container}>
          <Typography variant="h5" mb={"5px"} fontWeight={"900"}>
            {footerData.communities.title}
          </Typography>
          {footerData.communities.links.map((item, index) => (
            <Box key={index} py={"2px"}>
              <Typography variant="subtitle1">
                <a className={classes.link} target="_blank" href={item.url}>
                  {item.title}
                </a>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.container}>
          <Typography variant="h5" mb={"5px"} fontWeight={"900"}>
            {footerData.useful_links.title}
          </Typography>
          {footerData.useful_links.links.map((item, index) => (
            <Box key={index} py={"2px"}>
              <Typography variant="subtitle1">
                <a className={classes.link} target="_blank" href={item.url}>
                  {item.title}
                </a>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.container}>
          <Typography variant="h5" mb={"5px"} fontWeight={"900"}>
            {footerData.spotify_plans.title}
          </Typography>
          {footerData.spotify_plans.links.map((item, index) => (
            <Box key={index} py={"2px"}>
              <Typography variant="subtitle1">
                <a className={classes.link} target="_blank" href={item.url}>
                  {item.title}
                </a>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.container} sx={{ flex: 1, padding: "0", display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="subtitle1">
            {footerData.social_media_links.map((item, index) => (
              <a className={classes.link} target="_blank" href={item.url} key={index}>
                {item.title == "Instagram" && <StyledInstagramIconOutlined />}
                {item.title == "Facebook" && <StyledFacebookIconOutlined />}
                {item.title == "Twitter" && <StyledTwitterIconOutlined />}
              </a>
            ))}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.firstContainer} paddingY={"50px"}>
        <Box className={classes.container}>
          <Typography variant="subtitle1">
            {footerData.other_links.map((item, index) => (
              <a className={classes.link} target="_blank" style={{ paddingRight: "10px" }} href={item.url} key={index}>
                {item.title}
              </a>
            ))}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color={"text.secondary"}>
          © 2024 Spotify AB
        </Typography>
      </Box>
    </Box>
  );
};

export default AppFooter;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    marginTop: "20px",
    padding: "20px",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  firstContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    minWidth: "fit-content",
    padding: "0 20px 0 0",
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": { textDecoration: "underline", color: theme.palette.text.primary },
  },
}));
