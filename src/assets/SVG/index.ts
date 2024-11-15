import withIconStyles from "@components/HOC/withIconStyles";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CloseRounded,
  ContrastRounded,
  FacebookOutlined,
  FavoriteBorder,
  Instagram,
  MoreVert,
  Notifications,
  PauseCircleOutlineRounded,
  PlayCircleOutlineRounded,
  RepeatOneRounded,
  RepeatRounded,
  SearchRounded,
  Settings,
  ShuffleRounded,
  SkipNextRounded,
  SkipPreviousRounded,
  X,
} from "@mui/icons-material";

export const StyledBackIcon = withIconStyles(ArrowBackIosNewRounded, "Go Back");
export const StyledForwardIcon = withIconStyles(ArrowForwardIosRounded, "Go Forward");
export const StyledSettingIconFilled = withIconStyles(Settings, "Settings");
export const StyledNotificationIconFilled = withIconStyles(Notifications, "What's New", "24px");
export const StyledThemeModeIconFilled = withIconStyles(ContrastRounded, "Theme");
export const StyledSearchIconFilled = withIconStyles(SearchRounded, "Theme");
export const StyledCloseIconFilled = withIconStyles(CloseRounded);
export const StyledFavoriteIconOutlined = withIconStyles(FavoriteBorder, "Add to Favorites");
export const StyledRepeatIconFilled = withIconStyles(RepeatRounded);
export const StyledRepeatOnceIconFilled = withIconStyles(RepeatOneRounded);
export const StyledShuffleIconUnFilled = withIconStyles(ShuffleRounded);
export const StyledNextIconFilled = withIconStyles(SkipNextRounded);
export const StyledPreviousIconFilled = withIconStyles(SkipPreviousRounded);
export const StyledPlayIconOutlined = withIconStyles(PlayCircleOutlineRounded, "", "40px");
export const StyledPauseIconOutlined = withIconStyles(PauseCircleOutlineRounded, "", "40px");
export const StyledInstagramIconOutlined = withIconStyles(Instagram, "", "24px");
export const StyledFacebookIconOutlined = withIconStyles(FacebookOutlined, "", "26px");
export const StyledTwitterIconOutlined = withIconStyles(X, "", "20px");
export const StyledMenuIcon = withIconStyles(MoreVert, "", "24px");
