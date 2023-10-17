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
    top: height * 0.005,
    width: width * 0.27,
    height: width * 0.27,
    backgroundColor: Colors.gray2, 
    borderRadius: height * 0.1,
  },

  avatar: {
    position: 'absolute',
    top: 11,
    left: 8,
    width: 88,
    height: 88,
    backgroundColor: Colors.gray,
    opacity: 1,
    overflow: 'hidden',
    borderRadius: height * 0.1,
  },

  textboxContainer: {
    position: 'absolute',
    top: 264,
    left: 28,
    opacity: 1,
  },

  textboxContainer2: {
    position: 'absolute',
    top: 348,
    left: 28,
    opacity: 1,
  },

  textboxContainer3: {
    position: 'absolute',
    top: 432,
    left: 28,
    opacity: 1,
  },

  textboxContainer4: {
    position: 'absolute',
    top: 520,
    left: 28,
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
    top: 738,
    left: 28,
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
    top: 685,
    left: 28,
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
    top: 685,
    left: 160,
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