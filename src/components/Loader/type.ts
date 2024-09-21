import { IGlobalButtonProps } from "@utils/globleTypes";

export interface ILoaderButtonProps extends IGlobalButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "success" | "secondary";
  loading?: boolean;
}

export interface ILoaderAppBarProps {
  color?: string;
  progress?: number;
  ref?: string;
  onProgressFinish?: () => void;
}
