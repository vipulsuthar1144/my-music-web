import { ThemeModeContext } from "@/theme/hooks/ThemeModeProvider";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Practice from "./practice";
import { Box } from "@mui/material";
type prop = {
  count: number;
};

const ChildComponent = React.memo(() => {
  useEffect(() => {
    console.log("this is practice route");
  });
  // const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  // console.log("this is practice route");
  return <Box>child component</Box>;
});

const CurrentRoute = () => {
  const location = useLocation();
  const { themeMode } = useContext(ThemeModeContext);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>CurrentRoute</h1>
      <h3>current theme ::{themeMode}</h3>
      <h3>hash ::{location.hash}</h3>
      <h3>key ::{location.key}</h3>
      <h3>pathname ::{location.pathname}</h3>
      <h3>search ::{location.search}</h3>
      <h3>state ::{location.state}</h3>
      <h3>count : {count}</h3>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment Count</button>
      <ChildComponent />
    </div>
  );
};

export default CurrentRoute;
