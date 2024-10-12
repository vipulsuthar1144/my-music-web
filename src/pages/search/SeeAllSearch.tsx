import { IAlbumSchema } from "@/schemas/album.schema";
import { IArtistSchema } from "@/schemas/artist.schema";
import { IPlaylistSchema } from "@/schemas/playlist.schema";
import { ITrackSchema } from "@/schemas/track.schema";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { RootContainer } from "@components/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import useSeeAllSearchController from "./SeeAllSearch.controller";
import ItemArtistAlbumsList from "./utilityComp/ItemArtistAlbumsList";
import ItemSongList from "./utilityComp/ItemSongList";

const SeeAllSearch = () => {
  const { listenerGoToArtistDetails, listenerGoToAlbumDetails, listenerGoToPlaylistDetails, isSeeAllDataListLoading, seeAllDataList, searchQuery, searchType, lastArtistListItemRef } =
    useSeeAllSearchController();

  const renderDataList = () => {
    if (seeAllDataList.length == 0 && !isSeeAllDataListLoading) {
      return (
        <Typography variant="h3" my={"20px"}>
          No {searchType} Found
        </Typography>
      );
    }
    switch (searchType) {
      case "track":
        return renderTrackList();
      case "artist":
        return renderArtistList();
      case "playlist":
        return renderPlaylistList();
      case "album":
        return renderAlbumList();
      default:
        return (
          <Typography variant="h3" my={"20px"}>
            No {searchType} Found
          </Typography>
        );
    }
  };
  const renderTrackList = () => {
    return (
      <Grid container spacing={1}>
        {seeAllDataList.map((track: ITrackSchema, index) => (
          <Grid item xs={12} lg={6} key={track.id}>
            <Box key={track.id} component={"div"} sx={{ width: "100%" }} ref={index === seeAllDataList.length - 1 ? lastArtistListItemRef : null}>
              <ItemSongList key={track.id} img={track?.album?.images && track?.album?.images[0]?.url} title={track?.name} subtitleArr={track.artists} trackDuration={track.duration_ms} />
            </Box>
          </Grid>
        ))}
        {isSeeAllDataListLoading && renderSkeleton()}
      </Grid>
    );
  };
  const renderArtistList = () => {
    return (
      <Grid container spacing={1}>
        {seeAllDataList.map((item: IArtistSchema, index) => (
          <Grid item xs={6} sm={4} md={3} lg={1.5} key={item.id}>
            <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === seeAllDataList.length - 1 ? lastArtistListItemRef : null}>
              <ItemArtistAlbumsList
                onClick={() => listenerGoToArtistDetails(item.id)}
                key={item.id}
                subtitle={item.type}
                title={item.name}
                img={(item.images && item?.images[0]?.url) || ""}
                isArtist={true}
              />
            </Box>
          </Grid>
        ))}
        {isSeeAllDataListLoading && renderSkeleton()}
      </Grid>
    );
  };
  const renderAlbumList = () => {
    return (
      <>
        <Grid container spacing={1}>
          {seeAllDataList.map((item: IAlbumSchema, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={item.id}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === seeAllDataList.length - 1 ? lastArtistListItemRef : null}>
                <ItemArtistAlbumsList
                  key={item.id}
                  onClick={() => listenerGoToAlbumDetails(item.id)}
                  subtitleArr={item.artists}
                  subtitle={item.release_date?.slice(0, 4)}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isSeeAllDataListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderPlaylistList = () => {
    return (
      <>
        <Grid container spacing={1}>
          {seeAllDataList.map((item: IPlaylistSchema, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={item.id}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === seeAllDataList.length - 1 ? lastArtistListItemRef : null}>
                <ItemArtistAlbumsList
                  key={item.id}
                  onClick={() => listenerGoToPlaylistDetails(item.id)}
                  subtitle={`By ${item.owner?.display_name}`}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isSeeAllDataListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderSkeleton = () => {
    if (searchType == "track") {
      return Array.from({ length: 20 }, (_, index) => (
        <Grid item xs={12} lg={6} key={index}>
          <ItemSongListSkeleton key={index} />
        </Grid>
      ));
    }
    return Array.from({ length: 20 }, (_, index) => (
      <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
        <ItemArtistAlbumListSkeleton isArtist={searchType == "artist"} key={index} />
      </Grid>
    ));
  };
  return (
    <RootContainer>
      <Typography variant="h3" my={"20px"}>
        Search result of "{searchQuery}"
      </Typography>
      {renderDataList()}
    </RootContainer>
  );
};

export default SeeAllSearch;
