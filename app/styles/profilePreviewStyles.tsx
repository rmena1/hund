import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const profilePreviewStyles = StyleSheet.create({
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
    top: height * 0.015,
    left: height * 0.011,
    width: height * 0.115,
    height: height * 0.115,
    backgroundColor: Colors.gray, 
    borderRadius: 44,
  },

  textboxContainer: {
    position: 'absolute',
    top: height * 0.34,
    left: width * 0.06,
  },

  textboxContainer2: {
    position: 'absolute',
    top: height * 0.45,
    left: width * 0.06,
  },

  textboxContainer3: {
    position: 'absolute',
    top: height * 0.56,
    left: width * 0.06,
  },

  textboxContainer4: {
    position: 'absolute',
    top: height * 0.67,
    left: width * 0.06,
  },

  input: {
    width: width * 0.87,
    height: height * 0.06,
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: '400', 
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    paddingLeft: height * 0.018,
    paddingRight: height * 0.018,
    color: Colors.gray,
  },

  label: {
    fontSize: height * 0.017,
    fontWeight: '700',
  },

  buttonCreate: {
    position: 'absolute',
    top: height * 0.95,
    left: height * 0.03,
    width: width * 0.87,
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange, 
    borderRadius: 4,
  },

  buttonText: {
    fontFamily: Fonts.montserrat, 
    fontSize: height * 0.023,
    fontWeight: '400',
    color: Colors.white,
  },

  buttonPets: {
    position: 'absolute',
    top: height * 0.88,
    left: height * 0.03,
    width: width * 0.32,
    height: height * 0.047,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighygray1,
    borderRadius: 18,
  },

  buttonTextPets: {
    fontFamily: Fonts.montserrat, 
    fontSize: height * 0.018,
    fontWeight: '400',
    color: Colors.white,
  },

  buttonPay: {
    position: 'absolute',
    top: height * 0.88,
    left: height * 0.2,
    width: width * 0.53,
    height: height * 0.047,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighygray1,
    borderRadius: 18,
  },

  buttonTextPay: {
    fontFamily: Fonts.montserrat, 
    fontSize: height * 0.018,
    fontWeight: '400',
    color: Colors.white,
  },

});

export default profilePreviewStyles;