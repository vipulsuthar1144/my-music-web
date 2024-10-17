import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/design/styledComponents";
import { Grid, Skeleton, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useRelatedArtistController from "./RelatedArtist.controller";
import FallbackError from "@components/FallbackError";

const RelatedArtist = () => {
  const { isRelatedArtistListError, isRelatedArtistListLoading, relatedArtistList, listenerGoToArtistDetails } = useRelatedArtistController();

  const renderArtistsList = () => {
    if (isRelatedArtistListLoading) return renderSkeleton();
    if (isRelatedArtistListError) return <FallbackError type="something_went_wrong" />;
    if (relatedArtistList.length == 0 && !isRelatedArtistListError && !isRelatedArtistListLoading) return <FallbackError message="No Related Artists Found." type="data_not_found" />;

    return (
      <>
        <Typography variant="h3" my={"20px"}>
          Related Artists
        </Typography>
        <Grid container spacing={1}>
          {relatedArtistList.map((item, _) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5}>
              <ItemArtistAlbumsList
                onClick={() => listenerGoToArtistDetails(item.id)}
                key={item.id}
                subtitle={item.type}
                title={item.name}
                img={(item.images && item?.images[0]?.url) || ""}
                isArtist={true}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  const renderSkeleton = () => {
    return (
      <>
        <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px` }} />
        <Grid container spacing={1}>
          {Array.from({ length: 20 }, (_, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
              <ItemArtistAlbumListSkeleton isArtist={true} key={index} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  return <RootContainer>{renderArtistsList()}</RootContainer>;
};

export default RelatedArtist;
