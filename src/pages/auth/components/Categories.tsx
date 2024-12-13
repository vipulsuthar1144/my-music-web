import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import ImageComp from "@components/design/Image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Hip Hop",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    count: "2.5M tracks",
  },
  {
    name: "Rock",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    count: "1.8M tracks",
  },
  {
    name: "Electronic",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    count: "3.2M tracks",
  },
  {
    name: "Jazz",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    count: "892K tracks",
  },
  {
    name: "Classical",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    count: "1.1M tracks",
  },
  {
    name: "Pop",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80",
    count: "4.5M tracks",
  },
];

const Categories = () => {
  return (
    <Box width={"100%"} sx={{ backgroundColor: "black", py: 6 }}>
      <Container maxWidth="xl">
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
            Browse Categories
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem" },
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            Explore music across different genres
          </Typography>
        </motion.div>

        <Grid width={"100%"} container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} lg={2} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    marginBottom: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: `transform ${globleEaseInOutTransitionTime}`,
                    "&:hover": {
                      //   backgroundColor: "rgba(33, 33, 33, 0.9)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <ImageComp
                    img={category.image}
                    alt={category.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      userSelect: "none",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray.300" }}>
                      {category.count}
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

export default Categories;
