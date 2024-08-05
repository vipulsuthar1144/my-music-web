import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps, SxProps, Theme } from "@mui/material";
import React, { ComponentType, CSSProperties } from "react";

export type ToastTypes = "success" | "warning" | "error" | "info";

export interface IGlobleImageProps {
  img: string;
  alt: string;
  style?: SxProps<Theme>;
}

export interface IGlobalButtonProps {
  label: any;
  sublabel?: string | React.ReactNode;
  disabled?: boolean;
  onClick?: (e: any) => void;
  style?: CSSProperties;
  type?: string;
  startIcon?: React.ReactElement;
}
