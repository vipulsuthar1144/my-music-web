import {
  StyledFacebookIconOutlined,
  StyledInstagramIconOutlined,
  StyledTwitterIconOutlined,
} from "@assets/SVG";
import { Box, Typography, useTheme } from "@mui/material";
import footerData from "../config/jsons/footerLinks.json";
import { useIsSmallScreen } from "@utils/constants";

const AppFooter = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);

  const renderFooterLinks = (
    title: string,
    links: { title: string; url: string }[]
  ) => {
    return (
      <Box
        // className={classes.container}
        sx={{
          flex: 1,
          minWidth: "fit-content",
          padding: "0 20px 0 0",
        }}
      >
        <Typography variant="h5" fontWeight={"900"} mb={"5px"}>
          {title}
        </Typography>
        {links.map((item, index) => (
          <Box key={index} py={"2px"}>
            <Typography variant="subtitle1">
              <Box
                component="a"
                target="_blank"
                href={item.url}
                key={index}
                sx={{
                  paddingRight: "10px",
                  color: "text.secondary",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "text.primary",
                  },
                }}
              >
                {item.title}
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <Box
      component={"footer"}
      // className={classes.root}
      sx={{
        zIndex: 8,
        marginTop: "30px",
        padding: "20px",
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        position: "relative",
      }}
      style={{ padding: isSmallScreen ? "20px 20px 50px 20px" : "20px" }}
    >
      <Box
        //  className={classes.firstContainer}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
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
          // className={classes.container}
          sx={{
            flex: 1,
            padding: "0",
            display: "flex",
            justifyContent: "flex-end",

            minWidth: "fit-content",
          }}
        >
          <Typography variant="subtitle1">
            {footerData.social_media_links.map((item, index) => (
              <Box
                component="a"
                target="_blank"
                href={item.url}
                key={index}
                sx={{
                  paddingRight: "10px",
                  color: "text.secondary",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "text.primary",
                  },
                }}
              >
                {item.title == "Instagram" && <StyledInstagramIconOutlined />}
                {item.title == "Facebook" && <StyledFacebookIconOutlined />}
                {item.title == "Twitter" && <StyledTwitterIconOutlined />}
              </Box>
            ))}
          </Typography>
        </Box>
      </Box>

      <Box
        //  className={classes.firstContainer}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
        paddingY={"50px"}
      >
        <Box
          // className={classes.container}
          sx={{
            flex: 1,
            minWidth: "fit-content",
            padding: "0 20px 0 0",
          }}
        >
          <Typography variant="subtitle1">
            {footerData.other_links.map((item, index) => (
              <Box
                component="a"
                target="_blank"
                href={item.url}
                key={index}
                sx={{
                  paddingRight: "10px",
                  color: "text.secondary",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "text.primary",
                  },
                }}
              >
                {item.title}
              </Box>
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

// export const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     zIndex: 8,
//     marginTop: "30px",
//     padding: "20px",
//     width: "100%",
//     height: "auto",
//     borderRadius: "10px",
//     position: "relative",
//   },
//   firstContainer: {
//     width: "100%",
//     height: "auto",
//     display: "flex",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   container: {
//     flex: 1,
//     minWidth: "fit-content",
//     padding: "0 20px 0 0",
//   },
//   link: {
//     color: theme.palette.text.secondary,
//     textDecoration: "none",
//     cursor: "pointer",
//     "&:hover": {
//       textDecoration: "underline",
//       color: theme.palette.text.primary,
//     },
//   },
// }));
