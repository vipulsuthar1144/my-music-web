import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { alpha, IconButton, SvgIconProps, SvgIconTypeMap, Theme, Tooltip } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { makeStyles } from "@mui/styles";
import { globleTransitionTime } from "@utils/globleStyle";
import React, { Component, ComponentType } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: "40px",
    color: theme.palette.text.primary,
    transition: `background-image ${globleTransitionTime}`,
    cursor: "pointer",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: "50%",
    "&:hover": {
      // transform: "scale(1.2)",
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
}));

const withIconStyles = <P extends SvgIconProps>(IconComponent: ComponentType<P>, title: string = ""): React.FC<P> => {
  const WithIconStyles: React.FC<P> = (props) => {
    const classes = useStyles();

    return (
      <Tooltip title={title}>
        <IconButton
          sx={{
            padding: 0,
            fontSize: 0,
          }}
        >
          <IconComponent {...props} className={classes.root} />;
        </IconButton>
      </Tooltip>
    );
  };

  return WithIconStyles;
};

export default withIconStyles;
