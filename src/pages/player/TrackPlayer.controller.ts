import { TRepeatModeOptions } from "@/services/player.services";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  getCurrentPlayingTrack,
  playback,
} from "@/store/thunkServices/player.thunkservice";
import { likeUnlikeTracks } from "@/store/thunkServices/track.thunksevices";

const useTrackPlayerController = () => {
  // let player: Spotify.Player | null | undefined = null;
  // const [player, setPlayer] = useState<Spotify.Player | null | undefined>(null);
  const dispatch = useAppDispatch();
  const { currentPlayingTrack } = useAppSelector((state) => state.player);
  // const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  // const [__, setDeviceId] = useLocalStorage(LocalStorageKeys.DEVICE_ID, "");
  // useEffect(() => {
  // initializeDevice();
  // return () => {
  //   if (player) {
  //     player.disconnect();
  //   }
  // };
  // }, [accessToken, player]);

  // const initializeDevice = () => {
  //   if (!player) {
  //     const script = document.createElement("script");
  //     script.src = "https://sdk.scdn.co/spotify-player.js";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     window.onSpotifyWebPlaybackSDKReady = () => {
  //       const webPlayer = new Spotify.Player({
  //         name: "My Music",
  //         getOAuthToken: (cb) => cb(accessToken ?? ""),
  //         volume: 0.5,
  //       });

  //       // Error handling
  //       webPlayer.addListener("initialization_error", ({ message }) => {
  //         console.error("Initialization Error:", message);
  //       });
  //       webPlayer.addListener("authentication_error", ({ message }) => {
  //         console.error("Authentication Error:", message);
  //       });
  //       webPlayer.addListener("account_error", (err: any) => {
  //         console.error("Account Error:", err.message, err);
  //       });
  //       webPlayer.addListener("playback_error", ({ message }) => {
  //         console.error("Playback Error:", message);
  //       });

  //       // Player state
  //       webPlayer.addListener("player_state_changed", (state) => {
  //         if (!state) {
  //           // console.log("No state available");
  //           return;
  //         }
  //         if (
  //           (!state.loading || state.paused) &&
  //           state.track_window.current_track.id !==
  //             currentPlayingTrack?.item?.id
  //         ) {
  //           dispatch(getCurrentPlayingTrack());
  //         }
  //       });

  //       // Ready event to get the device ID
  //       webPlayer.addListener("ready", ({ device_id }) => {
  //         console.log("Ready with Device ID:", device_id);
  //         setDeviceId(device_id);
  //       });

  //       webPlayer.addListener("not_ready", ({ device_id }) => {
  //         console.log("Device ID has gone offline:", device_id);
  //       });

  //       // Connect the player!
  //       webPlayer.connect().then((success) => {
  //         if (success) {
  //           console.log("Player connected successfully!");
  //           setPlayer(webPlayer);
  //         } else {
  //           console.error("Failed to connect player");
  //         }
  //       });
  //     };
  //   }
  // };
  const listenerResumePlayback = () => {
    dispatch(
      playback.play({
        reqPlayTrackSchema: {
          uris: [currentPlayingTrack?.item?.uri ?? ""],
          position_ms: currentPlayingTrack?.progress_ms,
        },
      })
    );
  };
  const listenerLikeUnlikeTrack = () => {
    dispatch(
      likeUnlikeTracks({
        isLiked: currentPlayingTrack?.item?.isLiked || false,
        trackId: currentPlayingTrack?.item?.id ?? "",
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getCurrentPlayingTrack());
      });
  };
  const listenerPausePlayback = () => {
    dispatch(playback.pause());
  };
  const listenerSkipNext = () => {
    dispatch(playback.skipNext());
  };
  const listenerSkipPrevious = () => {
    dispatch(playback.skipPrevious());
  };
  const listenerSeekToPosition = () => {};
  const listenerSetVolume = () => {};
  const listenerSetShuffleMode = () => {
    dispatch(
      playback.setShuffleMode({
        shuffle: !(currentPlayingTrack?.shuffle_state ?? true),
      })
    );
  };
  const listenerSetRepeatMode = () => {
    let repeatMode: TRepeatModeOptions = "off";
    if (currentPlayingTrack?.repeat_state == "off") {
      repeatMode = "context";
    } else if (currentPlayingTrack?.repeat_state == "context") {
      repeatMode = "track";
    } else if (currentPlayingTrack?.repeat_state == "track") {
      repeatMode = "off";
    }
    dispatch(
      playback.setRepeatMode({
        mode: repeatMode,
      })
    );
  };

  return {
    listenerLikeUnlikeTrack,
    listenerSetRepeatMode,
    listenerResumePlayback,
    listenerPausePlayback,
    listenerSkipNext,
    listenerSkipPrevious,
    listenerSeekToPosition,
    listenerSetVolume,
    listenerSetShuffleMode,
    // player,
    currentPlayingTrack,
  };
};

export default useTrackPlayerController;
