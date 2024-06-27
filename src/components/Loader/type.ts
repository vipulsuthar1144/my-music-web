import { IGlobalButtonProps } from "@utils/globleTypes";

export interface ILoaderButtonProps extends IGlobalButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "success";
  loading: boolean;
}
