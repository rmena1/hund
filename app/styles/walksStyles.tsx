import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const walksStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  walkItem: {
    flex: 0,
    width: width * 0.85,
    height: height * 0.2,
    backgroundColor: Colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.shadow2,
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
    padding: 4,
  },

  imageWalks: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  viewMoreContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 4,
  },

  viewMoreBox: {
    backgroundColor: '#FF5400FF',
    borderRadius: 10,
    width: 30,
    padding: 10,
  },

  arrow: {
    borderLeftWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.white,
  },

  walkTitles: {
    fontFamily: Fonts.poppinsBold,
    fontSize: height * 0.02,
    fontWeight: '800',
  },

  walkInfo: {
    fontFamily: Fonts.poppins,
    fontSize: height * 0.018,
    fontWeight: '400',
    padding: width * 0.01,
  },
});

export default walksStyles;
