import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { IconButton, SvgIconProps, Theme, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleTransitionTime } from "@/theme/utils/globalTransitions";
import React, { ComponentType, MouseEvent } from "react";

type WithIconStylesProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  fontSize?: string;
  disabled?: boolean;
  iconColor?: string;
};

const withIconStyles = <P extends SvgIconProps>(
  IconComponent: ComponentType<P>,
  title: string = "",
  defaultFontSize: string = "20px",
  color: string = "text.primary"
): React.FC<Omit<P, "fontSize"> & WithIconStylesProps> => {
  const WithIconStyles: React.FC<Omit<P, "fontSize"> & WithIconStylesProps> = ({
    onClick,
    fontSize = defaultFontSize,
    disabled = false,
    iconColor = color,
    ...props
  }) => {
    const classes = useStyles();

    return (
      <Tooltip title={title} disableInteractive>
        <IconButton
          aria-label={title ?? "button"}
          className={classes.root}
          onMouseDown={(event) => event.stopPropagation()}
          style={{
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          disabled={disabled}
          onClick={onClick}
        >
          <IconComponent
            {...(props as P)}
            sx={{ fontSize, color: iconColor }}
          />
        </IconButton>
      </Tooltip>
    );
  };

  return WithIconStyles;
};

export default withIconStyles;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    transition: `background-image ${globleTransitionTime}, cursor ${globleTransitionTime}`,
    cursor: "pointer",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: "50%",
    backgroundImage: "transparent",
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
    "&:active": {
      transform: "scale(0.8)",
      backgroundImage: "transparent",
    },
    "&.Mui-disabled": {
      pointerEvents: "auto",
      cursor: "not-allowed",
      backgroundImage: "transparent",
    },
  },
}));
