import { colorsArr } from "@/theme/utils/mColors";

export const msToTimeConvert = (milliseconds: number): string => {
  try {
    let minutes = Math.floor(milliseconds / (1000 * 60));
    let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  } catch (error) {
    console.error("Error in msToTimeConvert", error);
    return "00:00";
  }
};

export const getRandomColor = (): string => {
  return colorsArr[Math.floor(Math.random() * colorsArr.length)];
};

export const formatFollowersCount = (followers: number): string => {
  const numStr = followers.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/^(\d+)(\d{3})(?=\d)/, "$1,$2");
};
