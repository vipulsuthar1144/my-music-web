import {
  StyledFacebookIconOutlined,
  StyledInstagramIconOutlined,
  StyledTwitterIconOutlined,
} from "@assets/SVG";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import footerData from "../config/jsons/footerLinks.json";
import { useIsSmallScreen } from "@utils/constants";

const AppFooter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);

  const renderFooterLinks = (
    title: string,
    links: { title: string; url: string }[]
  ) => {
    return (
      <Box className={classes.container}>
        <Typography variant="h5" fontWeight={"900"} mb={"5px"}>
          {title}
        </Typography>
        {links.map((item, index) => (
          <Box key={index} py={"2px"}>
            <Typography variant="subtitle1">
              <a className={classes.link} target="_blank" href={item.url}>
                {item.title}
              </a>
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <Box
      component={"footer"}
      className={classes.root}
      style={{ padding: isSmallScreen ? "20px 20px 50px 20px" : "20px" }}
    >
      <Box className={classes.firstContainer}>
        {renderFooterLinks(footerData.company.title, footerData.company.links)}
        {renderFooterLinks(
          footerData.communities.title,
          footerData.communities.links
        )}
        {renderFooterLinks(
          footerData.useful_links.title,
          footerData.useful_links.links
        )}
        {renderFooterLinks(
          footerData.spotify_plans.title,
          footerData.spotify_plans.links
        )}
        <Box
          className={classes.container}
          sx={{
            flex: 1,
            padding: "0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1">
            {footerData.social_media_links.map((item, index) => (
              <a
                className={classes.link}
                target="_blank"
                href={item.url}
                key={index}
              >
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
              <a
                className={classes.link}
                target="_blank"
                style={{ paddingRight: "10px" }}
                href={item.url}
                key={index}
              >
                {item.title}
              </a>
            ))}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color={"text.secondary"}>
          © 2024 My Music
        </Typography>
      </Box>
    </Box>
  );
};

export default AppFooter;

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 8,
    marginTop: "30px",
    padding: "20px",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    position: "relative",
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
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.text.primary,
    },
  },
}));
