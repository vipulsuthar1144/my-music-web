import { RootContainer } from "@components/design/styledComponents";
import { NotificationImportantRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Notification = () => {
  return (
    <RootContainer style={{ padding: "50px 20px" }}>
      <Typography variant="h2">What's New</Typography>
      <Typography variant="subtitle2" color="text.secondary">
        The latest releases from artists, podcasts, and shows you follow.
      </Typography>

      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "700px",
          height: "auto",
          textAlign: "center",
          p: "10px",
          m: "auto",
        }}
      >
        <NotificationImportantRounded
          sx={{ fontSize: 80, color: "text.primary" }}
        />
        <Typography variant="h2">
          We don't have any updates for you yet
        </Typography>
        <Typography variant="h6">
          When there's news, we'll post it here. Follow your favorite artists
          and podcasts to stay updated on them too.
        </Typography>
      </Box>
    </RootContainer>
  );
};

export default Notification;
