import { useAppSelector } from "@/store/store";
import { mColors } from "@/theme/utils/mColors";
import React from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoader = () => {
  const { topLoadingProgress } = useAppSelector((state) => state.globleLoader);

  return <LoadingBar color={mColors.loaderPrimary} progress={topLoadingProgress} />;
};

export default TopLoader;
