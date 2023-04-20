import {FlatList, Image} from 'react-native';
import FeedGridItem from './FeedGridItem';
import {Post} from '../../API';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  refetch: () => void;
  loading: boolean;
}

const FeedGridView = ({
  data,
  ListHeaderComponent,
  refetch,
  loading,
}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => item && <FeedGridItem post={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};

export default FeedGridView;
