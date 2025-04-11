import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import { forwardRef } from "react";

export interface IGlobalEditTextProps {
  text?: string;
  onTextChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onFocus?: () => void;
  onCrossBtnClick?: (e: any) => void;
  hasCrossIcon?: boolean;
  sx?: SxProps<Theme>;
}

const EditText = forwardRef<HTMLInputElement, IGlobalEditTextProps>(
  (
    {
      sx,
      onFocus,
      onTextChange,
      onKeyDown,
      text,
      onCrossBtnClick,
      hasCrossIcon = false,
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        id="outlined-error"
        color="secondary"
        value={text}
        onChange={onTextChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded
                sx={{
                  color: "text.primary",
                  fontSize: "24px",
                }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseRounded
                onClick={onCrossBtnClick}
                sx={{
                  cursor: "pointer",
                  color: "text.primary",
                  fontSize: "24px",
                  display: hasCrossIcon ? "block" : "none",
                }}
              />
            </InputAdornment>
          ),
          autoComplete: "off",
        }}
        placeholder="What do you want to play?"
        sx={{
          width: "300px",
          height: "40px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "secondary.main",

            "&.Mui-focused fieldset": {
              borderColor: "text.primary",
              borderWidth: "1.5px",
            },
            "&:hover fieldset": {
              borderColor: "text.primary",
              borderWidth: "1.5px",
            },
            "& fieldset": {
              borderColor: "text.secondary",
              borderWidth: "0px",
              // transition: `border-width ${globleEaseInOutTransitionTime}, border-color ${globleEaseInOutTransitionTime}`,
            },
          },
          "& .MuiInputBase-input": {
            height: "100%",
            backgroundColor: "secondary.main",
          },
          ...sx,
        }}
      />
    );
  }
);

export default EditText;
