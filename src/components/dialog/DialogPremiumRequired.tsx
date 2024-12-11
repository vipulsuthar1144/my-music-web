import { toggleDialogPremiumRequired } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import footerData from "../../config/jsons/footerLinks.json";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";

const DialogPremiumRequired = () => {
  // const classes = useStyles();
  const dispatch = useAppDispatch();
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
          maxWidth: "400px",
          width: "90%",
        },
      }}
    >
      <DialogTitle id="customized-dialog-title">
        <Typography variant="h4">Premium Required</Typography>
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
          Playing this track requires a Premium. Upgrade now to enjoy unlimited
          access to all your favorite music, ad-free listening, and exclusive
          features!
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
            "&:hover": {
              textDecoration: "underline",
              color: "text.primary",
            },
          }}
        >
          Explore Premium
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPremiumRequired;
