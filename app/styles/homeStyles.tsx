import { Colors, Fonts } from './generalStyles';
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'flex-end',
    minHeight: '80%',
  },

  imageHome: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  container: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
  },

  title: {
    fontFamily: Fonts.poppins,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 48,
    color: Colors.neutral,
    alignSelf: 'center',
  },

  subtitle: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 30,
    color: Colors.gray,
  },

  button: {
    backgroundColor: Colors.gray5,
    width: 80,
    height: 80,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2%',
    marginBottom: '2%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    color: Colors.white,
    textAlign: 'center',
  },

  textboxContainer: {
    marginTop: '10%',
  },

  mapContainer: {
    width: '100%',
    height: '70%',
  },

  map: {
    width:'100%',
    height: '100%'
  },

  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center"
  },

});

export default homeStyles;
