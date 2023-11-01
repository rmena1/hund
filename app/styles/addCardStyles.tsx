import { Colors, Fonts } from './generalStyles';
import { StyleSheet, Platform, StatusBar } from 'react-native';

export const addCardStyles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: '100%',
    backgroundColor: Colors.white,
  },

  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontFamily: Fonts.poppins,
    fontSize: 20,
    color: Colors.gray3,
  },

  backButton: {
    position: 'absolute',
    left: 16,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 32,
    height: '7%',
    width: '90%',
    alignSelf: 'center',
  },

  button: {
    color: Colors.white,
    backgroundColor: Colors.orange,
    height: '100%',
    width: '100%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },
});

export default addCardStyles;
