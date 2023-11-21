import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.gray2,
  },

  imageRegister: {
    left: width * 0.05,
    width: width * 1.1,
    height: height * 0.25,
    alignSelf: 'center',
    marginTop: '10%',
  },

  imageLogin: {
    width: width * 0.9,
    height: height * 0.25,
    marginTop: height * 0.05,
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    top: height * -0.05,
    height: height * 0.8,
    width: width,
    backgroundColor: Colors.white,
    paddingHorizontal: width * 0.05,
  },

  title: {
    marginTop: height * 0.05,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.035,
    fontWeight: '700',
    lineHeight: 48,
    color: Colors.neutral,
  },

  subtitle: {
    marginTop: '1%',
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.022,
    fontWeight: '400',
    lineHeight: 30,
    color: Colors.gray,
  },

  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.18,
  },

  subtitle2: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.neutral,
    marginRight: width * 0.02,
  },

  registerButton: {
    alignSelf: 'flex-start',
    flexGrow: 0,
    marginTop: '0.5%',
  },

  subtitle3: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.orange,
    textDecorationLine: 'underline',
  },

  textboxContainer: {
    marginTop: height * 0.05,
  },

  textboxContainer2: {
    marginTop: height * 0.03,
  },

  input: {
    width: '100%',
    height: height * 0.06,
    paddingLeft: width * 0.13,
    paddingRight: width * 0.07,
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    color: Colors.neutral,
  },

  iconMail: {
    position: 'absolute',
    top: height * 0.042,
    left: width * 0.03,
    fill: Colors.neutral,
  },

  iconPass: {
    position: 'absolute',
    top: height * 0.042,
    left: width * 0.035,
    fill: Colors.neutral,
  },

  iconEye: {
    position: 'absolute',
    top: height * 0.042,
    left: width * 0.79,
    fill: Colors.neutral,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  button: {
    marginTop: height * 0.05,
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.024,
    color: Colors.white,
  },
});

export default loginStyles;
