import { RootContainer } from "@components/design/styledComponents";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import PlaylistFeatures from "./components/PlaylistFeatures";
import Screenshots from "./components/Screenshots";
import Pricing from "./components/Plans";
import Download from "./components/Download";
import AppFooter from "@components/AppFooter";
import { Box } from "@mui/material";

const Auth = () => {
  return (
    <>
      <RootContainer
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        style={{ padding: 0, gap: 0 }}
      >
        <HeroSection />
        <Features />
        <Categories />
        <PlaylistFeatures />
        <Screenshots />
        <Pricing />
        <Download />
        <Box sx={{ width: "100%", padding: "10px 20px" }}>
          <AppFooter />
        </Box>
      </RootContainer>
    </>
  );
};

export default Auth;
