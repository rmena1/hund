import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const walkerPreviewStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  title: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.395,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.025,
    fontWeight: '700',
    lineHeight: height * 0.04,
    color: Colors.gray3,
  },

  group: {
    position: 'absolute',
    top: height * 0.155,
    left: height * 0.18,
    width: width * 0.1,
    height: width * 0.1,
    backgroundColor: Colors.gray4,
  },

  // Container gris claro foto
  container: {
    position: 'absolute',
    top: 4,
    left: 0,
    width: 104,
    height: 104,
    backgroundColor: Colors.gray2,
    borderRadius: 52,
  },

  avatar: {
    position: 'absolute',
    top: height * 0.015,
    left: height * 0.011,
    width: height * 0.115,
    height: height * 0.115,
    backgroundColor: Colors.gray,
    borderRadius: 44,
  },

  textboxContainer: {
    position: 'absolute',
    top: height * 0.328, //264,
    left: width * 0.05,
    opacity: 1,
  },

  textboxContainer2: {
    position: 'absolute',
    top: height * 0.43,
    left: width * 0.05,
    opacity: 1,
  },

  textboxContainer3: {
    position: 'absolute',
    top: height * 0.53,
    left: width * 0.05,
    opacity: 1,
  },

  input: {
    width: 335,
    height: 44,
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    borderWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
    color: Colors.gray,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  buttonCreate: {
    position: 'absolute',
    top: height * 0.725, //588,
    left: width * 0.05,
    width: 335,
    height: 44,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: Colors.white,
    backgroundColor: Colors.orange,
    opacity: 1,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },

  buttonPets: {
    position: 'absolute',
    top: height * 0.655, //535,
    left: width * 0.05,
    width: 125,
    height: 36,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray5,
    opacity: 1,
    borderRadius: 18,
  },

  buttonTextPets: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.white,
  },

  buttonPay: {
    position: 'absolute',
    top: height * 0.655,
    left: width * 0.4,
    width: 203,
    height: 36,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray5,
    opacity: 1,
    borderWidth: 0,
    borderRadius: 18,
  },

  buttonTextPay: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.white,
  },
});

export default walkerPreviewStyles;

