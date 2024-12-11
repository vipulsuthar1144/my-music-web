import { ICategory } from "@/schemas/category.schema";
import { imgDefaultLikedSong, imgDefaultSong } from "@assets/images";
import { RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemArtistAlbumsList from "@components/ItemArtistAlbumsList";
import ItemCategoryList from "@components/ItemCategoryList";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { LibraryAddOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMyLibraryController from "./MyLibrary.controller";

const MyLibrary = () => {
  const {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    isMyPlaylistError,
    isMyPlaylistLoading,
    myPlaylists,
    bgColor,
  } = useMyLibraryController();
  const navigate = useNavigate();
  const savedItems: ICategory[] = [
    {
      id: "/collection/tracks",
      name: "Liked Songs",
      icons: [{ url: imgDefaultLikedSong }],
    },
    {
      id: "/collection/albums",
      name: "Saved Albums",
      icons: [{ url: imgDefaultSong }],
    },
  ];

  const renderPlaylistList = () => {
    if (isMyPlaylistError) return <FallbackError type="something_went_wrong" />;
    // if (myPlaylists.length == 0 && !isMyPlaylistLoading && !isMyPlaylistError)
    //   return (
    //     <FallbackError message=" No Playlist Available" type="data_not_found" />
    //   );
    return (
      <>
        {/* <Typography variant="h4">Your Playlists</Typography> */}
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={3} lg={1.5}>
            <Box
              component={"div"}
              sx={{
                width: "90%",
                borderRadius: "50%",
                aspectRatio: 1,
                alignSelf: "center",
                cursor: "pointer",
                m: "auto",
                background: bgColor,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "10px",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <LibraryAddOutlined sx={{ fontSize: "35px" }} />
              <Typography variant="h5">Create Playlist</Typography>
            </Box>
          </Grid>
          {myPlaylists.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.id}${index}`}>
              <Box
                component={"div"}
                sx={{ width: "100%" }}
                ref={
                  index === myPlaylists.length - 1
                    ? lastPlaylistListItemRef
                    : null
                }
              >
                <ItemArtistAlbumsList
                  onClick={() => listenerGoToPlaylistDetails(item?.id)}
                  subtitle={`By ${item?.owner?.display_name}`}
                  title={item?.name}
                  img={(item?.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isMyPlaylistLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderSkeleton = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
        <ItemArtistAlbumListSkeleton isArtist={false} key={index} />
      </Grid>
    ));
  };
  return (
    <RootContainer style={{ gap: "20px" }}>
      <Typography variant="h3">Your Library</Typography>
      <Grid container spacing={2} padding={"0 10px"}>
        {savedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ItemCategoryList
              key={index}
              onClick={() => item.id && navigate(item.id)}
              category={item}
            />
          </Grid>
        ))}
      </Grid>
      {renderPlaylistList()}
    </RootContainer>
  );
};

export default MyLibrary;
