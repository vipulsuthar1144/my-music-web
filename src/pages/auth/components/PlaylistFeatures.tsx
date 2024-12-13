import { Add, MusicNote, Public, Search } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useAuthController from "../Auth.controller";

const features = [
  {
    icon: Add,
    title: "Create Playlists",
    description: "Make your own collections, public or private",
  },
  {
    icon: MusicNote,
    title: "Add Tracks",
    description: "Build your perfect playlist one track at a time",
  },
  {
    icon: Search,
    title: "Search Anything",
    description: "Find songs, artists, albums instantly",
  },
  {
    icon: Public,
    title: "Share Music",
    description: "Let others discover your taste in music",
  },
];

const PlaylistFeatures = () => {
  const { listenerGoToLoginURL } = useAuthController();
  return (
    <Box
      width={"100%"}
      sx={{ position: "relative", backgroundColor: "black", py: 6 }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.3rem" },
              color: "white",
              marginBottom: 2,
            }}
          >
            Create & Share
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1rem",
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            Express yourself through music with our powerful playlist features
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: "#111827a0",
                    backdropFilter: "blur(10px)",
                    borderRadius: 2,
                    p: 3,
                    // textAlign: "center",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#111827",
                    },
                  }}
                >
                  <feature.icon
                    sx={{ fontSize: 58, color: "primary.main", mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "white",
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: "4rem" }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(to right,  #90caf975 , rgba(0, 0, 0, 0.4))",
              borderRadius: 3,
              p: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mb: 1,
                }}
                style={{ fontSize: "1.5rem" }}
              >
                Ready to start creating?
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Join millions of music lovers sharing their playlists
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "primary.main",
                color: "black",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "100px",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
              onClick={listenerGoToLoginURL}
            >
              Start Creating
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PlaylistFeatures;
