import { imgDefaultArtist, imgVerifiedTick } from "@assets/images";
import ImageComp, { ImageCompWithLoader, TitleSeeAll } from "@components/design/Image";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { ContainerWithoutScrollbar, RootContainer } from "@components/design/styledComponents";
import { Box, CircularProgress, Grid, Skeleton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { formatFollowersCount } from "@utils/genaralFunctions";
import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import ItemSongList from "../../components/ItemSongList";
import useArtistProfileController from "./ArtistProfile.controller";

const ArtistProfile = () => {
  const classes = useStyles();
  const {
    listenerSeeAllTopTracks,
    listenerGoToArtistDetails,
    listenerGoToAlbumDetails,
    listenerSeeAllRelatedArtist,
    listenerSeeAllAlbums,
    isArtistDataLoading,
    isArtistDataError,
    artistData,
    bgColor,
    artistTopTrackList,
    isArtistTopTracksListLoading,
    isArtistTopTracksListError,
    relatedArtistList,
    isRelatedArtistListLoading,
    isRelatedArtistListError,
    isArtistAlbumsListError,
    isArtistAlbumsListLoading,
    artistAlbumsList,
  } = useArtistProfileController();

  const renderArtistProfile = () => {
    if (isArtistDataLoading) return <CircularProgress size={30} thickness={5} sx={{ color: "loader.main", alignSelf: "center", margin: "auto" }} />;
    if (isArtistDataError)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Error Occurred while fetching Artist. Please try again later.
        </Typography>
      );
    if (!artistData)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Artist Not Found
        </Typography>
      );

    return (
      <>
        <Box className={classes.details} sx={{ backgroundColor: `${bgColor}`, zIndex: 1 }}>
          <Box sx={{ width: "100%", background: `linear-gradient(to bottom, ${bgColor}b0  10%, ${bgColor}05  )`, position: "absolute", height: "100%", left: 0, bottom: "-100%", zIndex: -1 }} />
          <ImageCompWithLoader
            img={(artistData.images && artistData?.images[0]?.url) || ""}
            alt={"artist"}
            errorImage={imgDefaultArtist}
            style={{
              // flex: "0 0 200px",
              width: "250px",
              aspectRatio: 1,
              borderRadius: "50%",
              boxShadow: "0px 10px 10px 2px rgba(10,10,10,0.5)",
              transition: `transform ${globleEaseInOutTransitionTime}`,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Box sx={{ flex: "1 1 auto" }}>
            <Box sx={{ display: "flex", flex: 1, alignItems: "center", gap: "3px", marginBottom: "10px" }}>
              {(artistData?.followers?.total ?? 0) > 1000 && (
                <ImageComp
                  img={imgVerifiedTick}
                  alt="Spotify"
                  style={{
                    width: "25px",
                    aspectRatio: 1,
                  }}
                />
              )}
              <Typography variant="h6" sx={{ textTransform: "capitalize", verticalAlign: "center" }}>
                {(artistData?.followers?.total ?? 0) > 1000 ? `Verified ${artistData.type} ` : artistData.type}
              </Typography>
            </Box>

            <Typography variant="h1" style={{ fontSize: "clamp(2rem,1rem + 4vw, 4rem)", fontWeight: "bolder" }} mb={"15px"}>
              {artistData?.name}
            </Typography>
            <Typography variant="h6" mb={"2px"}>
              {formatFollowersCount(artistData?.followers?.total ?? 0)} monthly listeners
            </Typography>
          </Box>
        </Box>
        {renderArtistTopTracks()}
        {renderArtistAlbum()}
        {renderRelatedArtists()}
      </>
    );
  };
  const renderArtistTopTracks = () => {
    if (isArtistTopTracksListLoading) return renderSkeletons("top-tracks");
    if (artistTopTrackList.length == 0 || isArtistTopTracksListError) return;
    return (
      <>
        <TitleSeeAll title="Popular Tracks" style={{ width: "100%", marginTop: "20px", padding: "0 10px", zIndex: 1 }} onSeeAllClick={listenerSeeAllTopTracks} />
        <Grid container spacing={1} mb={"10px"} paddingX={"10px"} sx={{ zIndex: 1 }}>
          {artistTopTrackList.map((track, _) => (
            <Grid item xs={12} lg={6} key={track.id}>
              <ItemSongList
                key={track.id}
                img={track?.album?.images && track?.album?.images[0]?.url}
                title={track?.name}
                subtitle={`From `}
                subtitleArr={[track?.album ?? {}]}
                isAlbumArr={true}
                trackDuration={track.duration_ms}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  const renderArtistAlbum = () => {
    if (isArtistAlbumsListLoading) return renderSkeletons("albums");
    if (artistAlbumsList.length == 0 || isArtistAlbumsListError) return;
    return (
      <>
        <TitleSeeAll title={`Albums By ${artistData?.name}`} style={{ width: "100%", marginTop: "20px", padding: "0 10px", zIndex: 1 }} onSeeAllClick={listenerSeeAllAlbums} />
        <ContainerWithoutScrollbar>
          {artistAlbumsList?.map((item, _) => (
            <ItemArtistAlbumsList
              onClick={() => listenerGoToAlbumDetails(item.id)}
              key={item.id}
              // subtitleArr={item.artists}
              subtitle={`${item.release_date?.slice(0, 4)},${item.album_type}`}
              title={item.name}
              img={(item.images && item?.images[0]?.url) || ""}
            />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderRelatedArtists = () => {
    if (isRelatedArtistListLoading) return renderSkeletons("relatedArtists");
    if (relatedArtistList.length == 0 || isRelatedArtistListError) return;
    return (
      <>
        <TitleSeeAll title={`Fans Also like`} style={{ width: "100%", marginTop: "0px", padding: "0 10px", zIndex: 1 }} onSeeAllClick={listenerSeeAllRelatedArtist} />
        <ContainerWithoutScrollbar>
          {relatedArtistList?.map((item, _) => (
            <ItemArtistAlbumsList
              key={item.id}
              subtitle={item.type}
              title={item.name}
              img={(item.images && item?.images[0]?.url) || ""}
              onClick={() => listenerGoToArtistDetails(item.id)}
              isArtist={true}
            />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderSkeletons = (seleletonsType: string) => {
    if (seleletonsType == "top-tracks") {
      return (
        <>
          <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, margin: "10px 0 0 10px", zIndex: 1 }} />
          <Grid container spacing={1} mb={"10px"} paddingX={"10px"} sx={{ zIndex: 1 }}>
            {Array.from({ length: 10 }, (_, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <ItemSongListSkeleton key={index} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }

    return (
      <Box sx={{ width: "100%" }}>
        <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, marginBottom: "10px" }} />
        <ContainerWithoutScrollbar sx={{ gap: "10px" }}>
          {Array.from({ length: 10 }, (_, index) => (
            <ItemArtistAlbumListSkeleton isArtist={seleletonsType != "albums"} key={index} />
          ))}
        </ContainerWithoutScrollbar>
      </Box>
    );
  };

  return <RootContainer style={{ padding: 0 }}>{renderArtistProfile()}</RootContainer>;
};

export default ArtistProfile;

const useStyles = makeStyles((_: Theme) => ({
  details: {
    borderRadius: "12px 12px 0 0",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    // flex: 1,
    gap: "30px",
    alignItems: "flex-end",
  },
}));
