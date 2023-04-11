import {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React from 'react';
import DoublePressable from '../DoublePressable';
import colors from '../../theme/colors';
import styles from './styles';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  // store this function on useRef so it will not re-create every time
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index ?? 0);
      }
    },
  );

  const renderItem = ({item}: {item: string}) => (
    <DoublePressable onDoublePress={onDoublePress}>
      <Image source={{uri: item}} style={styles.image} />
    </DoublePressable>
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeImageIndex === index ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
