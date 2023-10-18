import { Colors, Fonts } from './generalStyles';
import { StyleSheet } from 'react-native';

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
    width: 335,
    height: 130,
    backgroundColor: '#FFFFFFFF', // white
    borderRadius: 4, // border-m
    borderWidth: 1,
    borderColor: '#F8F9FAFF', // neutral-150
    borderStyle: 'solid',
    shadowColor: '#171a1f',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1, // shadow-xs
    shadowOpacity: 1, // shadow-xs
    marginTop: 8, // space-200
    marginBottom: 8, // space-200
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
    padding: 4, // space-300
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
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 0, // Change to 0 for a right arrow
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white', // Color of the arrow
  },

  walkTitles: {
    fontFamily: Fonts.poppinsBold,
    fontSize: 16,
    fontWeight: '800',
  },

  walkInfo: {
    fontFamily: Fonts.poppins,
    fontSize: 16,
    fontWeight: '400',
    padding: 20,
  },
});

export default walksStyles;
