import withIconStyles from "@components/HOC/withIconStyles";
import {
  AddCircleOutline,
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CheckCircle,
  CloseRounded,
  ContrastRounded,
  Favorite,
  FavoriteBorder,
  GitHub,
  LinkedIn,
  MoreVert,
  Notifications,
  PauseCircleOutlineRounded,
  PlayCircleOutlineRounded,
  Public,
  RepeatOneRounded,
  RepeatRounded,
  SearchRounded,
  Settings,
  ShuffleRounded,
  SkipNextRounded,
  SkipPreviousRounded,
} from "@mui/icons-material";

export const StyledBackIcon = withIconStyles(ArrowBackIosNewRounded, "Go Back");
export const StyledForwardIcon = withIconStyles(
  ArrowForwardIosRounded,
  "Go Forward"
);
export const StyledSettingIconFilled = withIconStyles(Settings, "Settings");
export const StyledNotificationIconFilled = withIconStyles(
  Notifications,
  "What's New",
  "24px"
);
export const StyledThemeModeIconFilled = withIconStyles(
  ContrastRounded,
  "Theme"
);
export const StyledSearchIconFilled = withIconStyles(SearchRounded, "Theme");
export const StyledCloseIconFilled = withIconStyles(CloseRounded);
export const StyledFavoriteIconOutlined = withIconStyles(
  FavoriteBorder,
  "Save to Liked",
  "24px"
);
export const StyledFavoriteIcon = withIconStyles(
  Favorite,
  "Remove from Liked",
  "24px",
  "error.main"
);
export const StyledRepeatIconFilled = withIconStyles(RepeatRounded);
export const StyledRepeatOnceIconFilled = withIconStyles(
  RepeatOneRounded,
  "",
  "24px"
);
export const StyledShuffleIconUnFilled = withIconStyles(ShuffleRounded);
export const StyledNextIconFilled = withIconStyles(SkipNextRounded);
export const StyledPreviousIconFilled = withIconStyles(SkipPreviousRounded);
export const StyledPlayIconOutlined = withIconStyles(
  PlayCircleOutlineRounded,
  "Play",
  "40px"
);
export const StyledPauseIconOutlined = withIconStyles(
  PauseCircleOutlineRounded,
  "Pause",
  "40px"
);
export const StyledInstagramIconOutlined = withIconStyles(LinkedIn, "", "24px");
export const StyledFacebookIconOutlined = withIconStyles(GitHub, "", "22px");
export const StyledTwitterIconOutlined = withIconStyles(Public, "", "25px");
export const StyledMenuIcon = withIconStyles(MoreVert, "", "24px");
export const StyledCheckIcon = withIconStyles(
  CheckCircle,
  "Remove from Saved",
  "40px"
);
export const StyledAddIconOutlined = withIconStyles(
  AddCircleOutline,
  "Add to Saved",
  "40px"
);
