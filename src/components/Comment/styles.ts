import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
