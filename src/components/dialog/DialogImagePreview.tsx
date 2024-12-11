import { toggleDialogImagePreview } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { imgDefaultArtist, imgDefaultSong } from "@assets/images";
import { ImageCompWithLoader } from "@components/design/Image";
import { Button, Dialog } from "@mui/material";

type DialogImagePreviewProps = {
  previewImageUrl: string;
  isArtist?: boolean;
};

const DialogImagePreview = ({
  previewImageUrl,
  isArtist = false,
}: DialogImagePreviewProps) => {
  const dispatch = useAppDispatch();
  const { openDialogImagePreview } = useAppSelector(
    (state) => state.globleLoader
  );

  const handleCloseDialog = (
    _: unknown,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick") return;
    dispatch(toggleDialogImagePreview(false));
  };

  return (
    <>
      <Dialog
        disableEscapeKeyDown
        open={openDialogImagePreview}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            background: "none",
            gap: "30px",
            maxWidth: "600px",
            width: "90%",
          },
        }}
      >
        <ImageCompWithLoader
          img={previewImageUrl}
          alt={"preview Image"}
          errorImage={isArtist ? imgDefaultArtist : imgDefaultSong}
          style={{
            width: "100%",
            aspectRatio: 1,
            borderRadius: isArtist ? "50%" : "10px",
            boxShadow: "0px 10px 20px 2px rgba(0,0,0,0.2)",
          }}
        />
        <Button
          variant="text"
          onClick={() => dispatch(toggleDialogImagePreview(false))}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};

export default DialogImagePreview;
