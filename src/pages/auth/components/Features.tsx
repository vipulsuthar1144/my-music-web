import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RadioIcon from "@mui/icons-material/Radio";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    icon: HeadphonesIcon,
    title: "High Quality Audio",
    description:
      "Experience music in crystal clear quality with our HD streaming technology.",
  },
  {
    icon: RadioIcon,
    title: "Offline Mode",
    description:
      "Download your favorite tracks and listen anywhere, even without internet.",
  },
  {
    icon: MusicNoteIcon,
    title: "Smart Playlists",
    description:
      "Let our AI create the perfect playlist based on your music taste.",
  },
  {
    icon: FavoriteIcon,
    title: "Discover Weekly",
    description:
      "Find new music you'll love with personalized recommendations.",
  },
];

const Features = () => {
  return (
    <Box width={"100%"} sx={{ backgroundColor: "black", py: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "2rem", sm: "2.3rem" },
              fontWeight: "bold",
              color: "white",
              marginBottom: 2,
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "text.secondary",
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            Experience music like never before with our cutting-edge features.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    // backgroundColor: "secondary.main",
                    backgroundColor: "#11182780",
                    borderRadius: 2,
                    padding: "20px",
                    // textAlign: "center",
                    transition: `transform ${globleEaseInOutTransitionTime}`,
                    "&:hover": {
                      backgroundColor: "#111827",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <feature.icon
                    sx={{
                      fontSize: 48,
                      color: "primary.main",
                      marginBottom: 1,
                      marginLeft: 2,
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
