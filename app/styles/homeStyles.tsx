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
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
    color: Colors.neutral,
    alignSelf: 'flex-start',
    marginBottom: '60%',
    marginLeft: '5%',
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
});

export default homeStyles;
