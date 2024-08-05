import withIconStyles from "@components/HOC/withIconStyles";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded, ContrastRounded, Home, Notifications, Settings } from "@mui/icons-material";

export const StyledBackIcon = withIconStyles(ArrowBackIosNewRounded);
export const StyledForwardIcon = withIconStyles(ArrowForwardIosRounded);
export const StyledSettingIconFilled = withIconStyles(Settings);
export const StyledNotificationIconFilled = withIconStyles(Notifications);
export const StyledThemeModeIconFilled = withIconStyles(ContrastRounded, "Theme");
