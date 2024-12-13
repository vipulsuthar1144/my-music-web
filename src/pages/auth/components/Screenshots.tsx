import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const screenshots = [
  {
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    title: "Immersive Player",
    description: "Full-screen lyrics and visualizations",
  },
  {
    url: "https://images.unsplash.com/photo-1669173034813-fff51b1ee64d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Playlist Management",
    description: "Organize your music collection",
  },
  {
    url: "https://images.unsplash.com/photo-1513398886898-6ae5ff7820f3?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Social Features",
    description: "Share and discover with friends",
  },
];

const Screenshots = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        background: "linear-gradient(to bottom, black, #90caf950)",
        py: 8,
      }}
    >
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
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.3rem" },
              color: "white",
              marginBottom: 2,
            }}
          >
            Experience the Future of Music
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
            Beautiful interface designed for music lovers
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {screenshots.map((screenshot, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 400,
                  }}
                >
                  <Box
                    component="img"
                    src={screenshot.url}
                    alt={screenshot.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2))",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      p: 3,
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        marginBottom: 1,
                      }}
                    >
                      {screenshot.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                    >
                      {screenshot.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Screenshots;
