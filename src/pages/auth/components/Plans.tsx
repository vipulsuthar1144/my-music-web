import { ContainerWithoutScrollbar } from "@components/design/styledComponents";
import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import useAuthController from "../Auth.controller";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Ad-supported listening",
      "Basic audio quality",
      "Mobile app access",
      "Create playlists",
      "Limited Tracks",
      "Single Account",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    features: [
      "Ad-free listening",
      "HD audio quality",
      "Offline mode",
      "Custom playlists",
      "Lyrics access",
      "Multi-device sync",
    ],
    highlighted: true,
  },
  {
    name: "Family",
    price: "$14.99",
    period: "per month",
    features: [
      "Up to 6 accounts",
      "All Premium features",
      "Family mix playlist",
      "Parental controls",
      "Shared playlists",
      "Individual accounts",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const { listenerGoToLoginURL } = useAuthController();
  return (
    <Box width={"100%"} sx={{ backgroundColor: "black", py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
            Choose Your Plan
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
            Start with our free tier or upgrade for premium features
          </Typography>
        </motion.div>

        {/* <Grid container spacing={4}> */}
        <ContainerWithoutScrollbar
          sx={{ scrollSnapType: "x mandatory", padding: "10px" }}
          gap={"20px"}
        >
          {plans.map((plan, index) => (
            // <Grid item xs={12} md={4} key={index}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                flex: 1,
                height: "auto",
                minWidth: "330px",
                scrollSnapAlign: "start",
                borderRadius: "10px",
                // padding: "10px 5px",
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  p: 4,
                  // backgroundColor: plan.highlighted ? "#90caf9cc" : "#111827",
                  backgroundColor: "#111827",
                  border: "2px solid #90caf9",
                  borderWidth: plan.highlighted ? 2 : 0,
                  //   transform: plan.highlighted ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: plan.highlighted ? "primary.main" : "white",
                    marginBottom: 2,
                  }}
                  style={{
                    fontSize: "1.7rem",
                  }}
                >
                  {plan.name}
                </Typography>
                <Box sx={{ marginBottom: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "white" }}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    {plan.price}
                    <Box
                      component={"span"}
                      sx={{
                        color: "text.secondary",
                      }}
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      /{plan.period}
                    </Box>
                    {/* <Typography variant="">/{plan.period}</Typography> */}
                  </Typography>
                </Box>
                <List>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disableGutters>
                      <ListItemIcon>
                        <Check
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: "body2",
                          fontSize: "0.9rem",
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: 5,
                    borderRadius: plan.highlighted ? "100px" : "12px",
                  }}
                  onClick={listenerGoToLoginURL}
                >
                  Get Started
                </Button>
              </Box>
            </motion.div>
            // </Grid>
          ))}
        </ContainerWithoutScrollbar>
        {/* </Grid> */}
      </Container>
    </Box>
  );
};

export default Pricing;
