import ItemArtistAlbumsList from "@/pages/home/utilityComp/ItemArtistAlbumsList";
import { ThemeModeContext, ThemeModeContextType } from "@/theme/hooks/ThemeModeProvider";
import { LoaderButton } from "@components/Button";
import { Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { themeMode } = useContext<ThemeModeContextType>(ThemeModeContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("home");
  }, []);

  return (
    <div>
      {/* <h1>Home </h1>
      <h4>Current Theme :: {themeMode} </h4>
      <LoaderButton
        label={"jai HO"}
        variant={"contained"}
        color={"secondary"}
        onClick={() => {
          // setLoading(true);
          // setTimeout(() => {
          //   setLoading(false);
          //   useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: false });
          //   navigate("/auth", { replace: true });
          //   // showCustomToast("Oops! LogOut Failed.", "error");
          // }, 2000);
        }}
        loading={loading}
      /> */}

      <Stack direction={"row"} gap={"10px"}>
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
      </Stack>

      <Stack direction={"row"} gap={"10px"}>
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
      </Stack>
      <Stack direction={"row"} gap={"10px"}>
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
      </Stack>
      <Stack direction={"row"} gap={"10px"}>
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
        <ItemArtistAlbumsList />
      </Stack>
    </div>
  );
};

export default Home;
