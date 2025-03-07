import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import TrackPlayer from "@/pages/player/TrackPlayer";
import {
  resetPlayerState,
  togglePlaybackLoadingState,
} from "@/store/slices/player.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getCurrentPlayingTrack } from "@/store/thunkServices/player.thunkservice";
import { sidebarWidth } from "@/theme/utils/globalTransitions";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import AppBottomNavigation from "@components/AppBottomNavigation";
import AppFooter from "@components/AppFooter";
import AppSideBar from "@components/AppSideBar";
import AppTopBar from "@components/AppTopBar";
import DialogPremiumRequired from "@components/dialog/DialogPremiumRequired";
import MoreOptionBottomSheet from "@components/MoreOptionBottomSheet";
import { Box, styled, useTheme } from "@mui/material";
import { LocalStorageKeys, useIsSmallScreen } from "@utils/constants";
import { useEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  // const classes = useStyles();
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<Spotify.Player | null | undefined>(null);
  const dispatch = useAppDispatch();
  const { currentPlayingTrack, isPlaybackLoading } = useAppSelector(
    (state) => state.player
  );
  const [__, setDeviceId] = useLocalStorage(LocalStorageKeys.DEVICE_ID, "");
  useEffect(() => {
    accessToken && initializeDevice();
    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [accessToken, player]);

  const initializeDevice = () => {
    if (!player) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const webPlayer = new Spotify.Player({
          name: "My Music",
          getOAuthToken: (cb) => cb(accessToken ?? ""),
          volume: 0.5,
        });

        // Error handling
        webPlayer.addListener("initialization_error", ({ message }) => {
          console.error("Initialization Error:", message);
        });
        webPlayer.addListener("authentication_error", ({ message }) => {
          console.error("Authentication Error:", message);
        });
        webPlayer.addListener("account_error", (err: any) => {
          console.error("Account Error:", err.message, err);
          dispatch(resetPlayerState());
        });
        webPlayer.addListener("playback_error", ({ message }) => {
          console.error("Playback Error:", message);
        });

        // Player state
        webPlayer.addListener("player_state_changed", (state) => {
          if (!state) {
            // console.log("No state available");
            dispatch(resetPlayerState());
            return;
          }

          // console.log(state, currentPlayingTrack);

          if (state.loading != isPlaybackLoading) {
            dispatch(togglePlaybackLoadingState());
          }
          if (
            (!state.loading || state.paused) &&
            state.track_window.current_track.id !==
              currentPlayingTrack?.item?.id
          ) {
            dispatch(getCurrentPlayingTrack());
          }
        });

        // Ready event to get the device ID
        webPlayer.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID:", device_id);
          setDeviceId(device_id);
        });

        webPlayer.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID has gone offline:", device_id);
        });

        // Connect the player!
        webPlayer.connect().then((success) => {
          if (success) {
            console.log("Player connected successfully!");
            setPlayer(webPlayer);
          } else {
            console.error("Failed to connect player");
          }
        });
      };
    }
  };

  useEffect(() => {
    containerRef.current && containerRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  if (!accessToken) {
    return <Navigate to="/auth" replace={true} />;
  }

  return (
    <Box
      // className={classes.root}
      sx={{
        height: "100vh",
        background: MGradientsDarkTheme.backroundBlue,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!isSmallScreen && <TrackPlayer />}
      {!isSmallScreen && <AppSideBar />}
      {isSmallScreen && <AppBottomNavigation />}

      <CustomScrollBox
        ref={containerRef}
        ml={isSmallScreen ? 0 : sidebarWidth}
        sx={{
          "::-webkit-scrollbar": {
            width: isSmallScreen ? "0px" : "5px",
          },
        }}
      >
        <DialogPremiumRequired />
        <MoreOptionBottomSheet />
        <AppTopBar />
        <Outlet />
        <AppFooter />
      </CustomScrollBox>
    </Box>
  );
};

export default ProtectedLayout;

// const useStyles = makeStyles((_: Theme) => ({
//   root: {
//     height: "100vh",
//     background: MGradientsDarkTheme.backroundBlue,
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

export const CustomScrollBox = styled(Box)(({ theme }) => ({
  width: "100%",
  // flex: 1,
  maxWidth: "1800px",
  // overflow: "hidden",
  overflow: "hidden  auto",
  height: "100vh",
  "::-webkit-scrollbar": {
    width: "5px",
    // height: "12px",
    // display: "none",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.palette.text.secondary, // Thumb color
    borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    // backgroundColor: theme.palette.primary.dark, // Darker color on hover
  },
}));
