import { toggleDialogPremiumRequired } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

const DialogPremiumRequired = () => {
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
          backgroundColor: "secondary.main",
          backgroundImage: "none",
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
        <Button
          variant="text"
          style={{ color: "loader.main" }}
          onClick={handleCloseDialog}
        >
          Explore Premium
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPremiumRequired;
