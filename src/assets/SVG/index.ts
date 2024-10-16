import withIconStyles from "@components/HOC/withIconStyles";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CloseRounded,
  ContrastRounded,
  FacebookOutlined,
  FavoriteBorder,
  Instagram,
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
  Twitter,
  X,
} from "@mui/icons-material";

export const StyledBackIcon = withIconStyles(ArrowBackIosNewRounded, "Go Back");
export const StyledForwardIcon = withIconStyles(ArrowForwardIosRounded, "Go Forward");
export const StyledSettingIconFilled = withIconStyles(Settings, "Settings");
export const StyledNotificationIconFilled = withIconStyles(Notifications, "What's New");
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
export const StyledInstagramIconOutlined = withIconStyles(Instagram, "Instagram", "24px");
export const StyledFacebookIconOutlined = withIconStyles(FacebookOutlined, "Facebook", "26px");
export const StyledTwitterIconOutlined = withIconStyles(X, "X", "20px");
