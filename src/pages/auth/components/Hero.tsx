import { appLogoMyMusic } from "@assets/images";
import { LoaderButton } from "@components/design/Button";
import ImageComp from "@components/design/Image";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useAuthController from "../Auth.controller";
import footerData from "@/config/jsons/footerLinks.json";

const HeroSection = () => {
  const { listenerGoToLoginURL } = useAuthController();
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      minHeight={"90vh"}
      height={"auto"}
      position="relative"
      overflow="hidden"
    >
      {/* Background gradients */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(74, 20, 140, 0.9), black)",
          zIndex: 0,
        }}
      />

      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: { xs: 10, sm: 16 },
          paddingBottom: { xs: 12, sm: 20 },
        }}
      >
        {/* Animated Music Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
          viewport={{ once: true }}
        >
          <ImageComp
            img={appLogoMyMusic}
            alt="My Music"
            style={{
              width: "25%",
              height: "auto",
              userSelect: "none",
              marginBottom: "30px",
              [theme.breakpoints.down("lg")]: {
                width: "40%",
              },
              [theme.breakpoints.down("md")]: {
                width: "40%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "60%",
              },
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem" },
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 2,
            }}
          >
            Your Music, Your Moment
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: "#E0E0E0",
              marginBottom: 4,
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            Stream millions of songs and podcasts. Discover new artists and
            create your perfect playlist.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
            justifyContent="center"
          >
            <LoaderButton
              label={"Start Listening"}
              startIcon={<PlayCircleIcon />}
              variant={"contained"}
              color={"primary"}
              style={{
                background: "none",
                backgroundColor: "loader.main",
                color: "black",
                borderRadius: "100px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "loader.main",
                  color: "black",
                },
              }}
              onClick={listenerGoToLoginURL}
            />
            <LoaderButton
              label={"View Plans"}
              variant={"outlined"}
              color={"primary"}
              style={{
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.2)",
                paddingX: 4,
                paddingY: 1.5,
                borderRadius: 999,
                fontWeight: "bold",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              onClick={() =>
                document.getElementById("explore_premium_id")?.click()
              }
            />
            <Box
              component="a"
              target="_blank"
              id="explore_premium_id"
              href={footerData.spotify_plans.links[0].url}
              sx={{
                display: "none",
              }}
            >
              Explore Premium
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
