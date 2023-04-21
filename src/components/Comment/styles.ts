import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
    marginTop: 4,
  },
  footerText: {
    color: colors.grey,
  },
  new: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
