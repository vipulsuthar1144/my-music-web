import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { IconButton, SvgIconProps, Theme, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleTransitionTime } from "@utils/globleStyle";
import React, { ComponentType, MouseEvent } from "react";

type WithIconStylesProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  fontSize?: string;
};

const withIconStyles = <P extends SvgIconProps>(IconComponent: ComponentType<P>, title: string = "", defaultFontSize: string = "20px"): React.FC<Omit<P, "fontSize"> & WithIconStylesProps> => {
  const WithIconStyles: React.FC<Omit<P, "fontSize"> & WithIconStylesProps> = ({ onClick, fontSize = defaultFontSize, ...props }) => {
    const classes = useStyles();

    return (
      <Tooltip title={title} disableInteractive>
        <IconButton className={classes.root} onMouseDown={(event) => event.stopPropagation()} onClick={onClick}>
          <IconComponent {...(props as P)} sx={{ fontSize, color: "text.primary" }} />
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
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
}));
