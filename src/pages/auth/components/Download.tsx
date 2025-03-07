import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import InstallAppButton from "./InstallAppButton";

const Download = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        background: "linear-gradient(to bottom, #90caf950, black)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                Take Your Music Everywhere
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  marginBottom: 4,
                }}
              >
                Download our app and enjoy your favorite music on any device.
                Available for iOS, Android, and desktop platforms.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <InstallAppButton />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 600,
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1510279410431-2d0808d69bf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="App preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.2))",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Download;
