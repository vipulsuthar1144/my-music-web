import { useState, useEffect } from "react";
import { Box, Slider, sliderClasses, Typography } from "@mui/material";
import { msToTimeConvert } from "@utils/genaralFunctions";

interface TSliderAutoProgress {
  duration?: number;
  progress?: number;
  isPlaying?: boolean;
}
const SliderAutoProgress = ({
  duration = 0,
  progress = 0,
  isPlaying = false,
}: TSliderAutoProgress) => {
  const min = 0;
  const max = duration / 1000;
  const [value, setValue] = useState(progress / 1000);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setValue((prevValue) => {
          if (prevValue < max) {
            return prevValue + 1;
          } else {
            return min; // Reset to min when max is reached
          }
        });
      }
    }, 1000); // Slide every second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [min, max, isPlaying]);

  useEffect(() => {
    setValue(progress / 1000);
  }, [progress]);

  // Handle manual slider changes
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box component={"div"} width={"100%"}>
      <Box
        component={"div"}
        //   onMouseEnter={() => setIsDrag(false)}
        //   onMouseLeave={() => {
        //     setIsDrag(true);
        //     setIsPressed(false);
        //   }}
      >
        <Slider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={1}
          sx={{
            color: "primary.main",
            padding: "5px 0px",
            [`& .${sliderClasses.rail}`]: {
              backgroundColor: "text.secondary",
            },
          }}
        />
        {/* <SliderAutoProgress /> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {msToTimeConvert(value * 1000)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {msToTimeConvert(duration)}
        </Typography>
      </Box>
    </Box>
  );
};

export default SliderAutoProgress;
