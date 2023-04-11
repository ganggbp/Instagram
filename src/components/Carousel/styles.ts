import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width,
    aspectRatio: 1,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
