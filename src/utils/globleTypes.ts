import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

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
}
