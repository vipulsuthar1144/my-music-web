import { toggleDialogPremiumRequired } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { imgPremiumRequired } from "@assets/images";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useIsSmallScreen } from "@utils/constants";
import footerData from "../../config/jsons/footerLinks.json";

const DialogPremiumRequired = () => {
  // const classes = useStyles();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const { openDialogPremiumRequired } = useAppSelector(
    (state) => state.globleLoader
  );
  const handleCloseDialog = () => {
    dispatch(toggleDialogPremiumRequired(false));
  };
  return (
    <Dialog
      onClose={handleCloseDialog}
      open={openDialogPremiumRequired}
      // maxWidth="md"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        "& .MuiPaper-root": {
          // backgroundColor: "secondary.main",
          background: MGradientsDarkTheme.premiumDialogBg,
          // backgroundImage: "none",
          boxShadow: "none",
          borderRadius: "15px",
          // width: "90%",
          maxWidth: "600px",
          minHeight: "50vh",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // maxWidth: "600px",
          height: "50vh",
          // minHeight: "100%",
          // bgcolor: "red",
        }}
      >
        <Box
          component={"div"}
          hidden={isSmallScreen ? true : false}
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${imgPremiumRequired})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <Box sx={{ flex: 1, width: "100%" }}>
          <DialogTitle
            id="customized-dialog-title"
            style={{ fontSize: "1.4rem", fontWeight: "bold" }}
          >
            Premium Required
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Close />
          </IconButton>
          <DialogContent
            dividers
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.primary.main}`,
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            })}
          >
            <Typography variant="subtitle1">
              It looks like you're trying to play music that's part of our
              exclusive premium content. To unlock this and enjoy unlimited
              access to all your favorite tracks, ad-free listening, and
              high-quality audio, you’ll need to upgrade to a premium
              membership.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Box
              component="a"
              target="_blank"
              href={footerData.spotify_plans.links[0].url}
              sx={{
                paddingRight: "10px",
                color: "text.secondary",
                textDecoration: "none",
                cursor: "pointer",
                padding: "10px 20px",
                "&:hover": {
                  textDecoration: "underline",
                  color: "text.primary",
                },
              }}
            >
              Explore Premium
            </Box>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DialogPremiumRequired;
