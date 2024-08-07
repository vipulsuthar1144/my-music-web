import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import React from "react";

const EditText = () => {
  return (
    <TextField
      id="outlined-error"
      color="secondary"
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
              sx={{
                cursor: "pointer",
                color: "text.primary",
                fontSize: "24px",
              }}
            />
          </InputAdornment>
        ),
      }}
      placeholder="What do you want to play?"
      sx={{
        width: "300px",
        height: "40px",
        marginLeft: 1.5,
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          height: "100%",
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
        },
      }}
    />
  );
};

export default EditText;
