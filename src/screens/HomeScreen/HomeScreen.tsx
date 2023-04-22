import {
  ActivityIndicator,
  FlatList,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import FeedPost from '../../components/FeedPost/FeedPost';
import {useRef, useState} from 'react';
import {useQuery} from '@apollo/client';
import {userFeed} from './queries';
import {
  ModelSortDirection,
  UserFeedQuery,
  UserFeedQueryVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {useAuthContext} from '../../contexts/AuthContext';

const HomeScreen = () => {
  const {userId} = useAuthContext();
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const {data, loading, error, refetch, fetchMore} = useQuery<
    UserFeedQuery,
    UserFeedQueryVariables
  >(userFeed, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
      limit: 10,
    },
  });

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  // store this function on useRef so it will not re-create every time
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching posts" message={error.message} />
    );
  }

  const posts = (data?.userFeed?.items || [])
    .filter(item => !item?._deleted && !item?.Post?._deleted)
    .map(item => item?.Post);

  const nextToken = data?.userFeed?.nextToken;

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }

    setIsFetchingMore(true);
    await fetchMore({variables: {nextToken}});
    setIsFetchingMore(false);
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) =>
        item && <FeedPost post={item} isVisible={activePostId === item.id} />
      }
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onRefresh={() => refetch()}
      refreshing={loading}
      onEndReached={loadMore}
    />
  );
};

export default HomeScreen;
