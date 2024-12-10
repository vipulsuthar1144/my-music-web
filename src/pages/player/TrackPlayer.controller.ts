import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getCurrentPlayingTrack } from "@/store/thunkServices/player.thunkservice";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect } from "react";

const useTrackPlayerController = () => {
  let player: Spotify.Player | null | undefined = null;
  const dispatch = useAppDispatch();
  const { currentPlayingTrack } = useAppSelector((state) => state.player);
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const [deviceId, setDeviceId] = useLocalStorage(
    LocalStorageKeys.DEVICE_ID,
    ""
  );
  useEffect(() => {
    player = initializeDevice();
    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [accessToken, player]);

  const initializeDevice = (): Spotify.Player | null | undefined => {
    if (!player) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
      console.log("track player");

      window.onSpotifyWebPlaybackSDKReady = () => {
        player = new Spotify.Player({
          name: "My Music",
          getOAuthToken: (cb) => cb(accessToken ?? ""),
          volume: 0.5,
        });

        // Error handling
        player.addListener("initialization_error", ({ message }) => {
          console.error("Initialization Error:", message);
        });
        player.addListener("authentication_error", ({ message }) => {
          console.error("Authentication Error:", message);
        });
        player.addListener("account_error", (err: any) => {
          console.error("Account Error:", err.message, err);
        });
        player.addListener("playback_error", ({ message }) => {
          console.error("Playback Error:", message);
        });

        // Player state
        player.addListener("player_state_changed", (state) => {
          if (!state) {
            console.log("No state available");
            return;
          }
          console.log(
            !state.loading &&
              state.track_window.current_track.id !=
                currentPlayingTrack?.item?.id,
            "Player state changed:",
            state
          );
          if (
            (!state.loading || state.paused) &&
            state.track_window.current_track.id !==
              currentPlayingTrack?.item?.id
          ) {
            dispatch(getCurrentPlayingTrack());
          }
        });

        // Ready event to get the device ID
        player.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID:", device_id);
          setDeviceId(device_id);
        });

        player.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID has gone offline:", device_id);
        });

        // Connect the player!
        player.connect().then((success) => {
          if (success) {
            console.log("Player connected successfully!");
          } else {
            console.error("Failed to connect player");
          }
        });
      };

      return player;
    }
  };

  return { player, currentPlayingTrack };
};

export default useTrackPlayerController;
