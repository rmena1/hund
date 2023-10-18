import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const createUserStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  title: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.365,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.025,
    fontWeight: '700',
    lineHeight: height * 0.04,
    color: Colors.gray3,
  },

  subtitle: {
    position: 'absolute',
    top: height * 0.69,
    left: width * 0.08,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.02,
    fontWeight: '600',
    color: Colors.neutral,
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

  button: {
    position: 'absolute',
    left: height * 0.1,
    width: height * 0.041,
    height: height * 0.041,
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    backgroundColor: Colors.orange,
    borderRadius: 16,
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

  buttonCreateDisabled: {
    position: 'absolute',
    top: height * 0.95,
    left: height * 0.03,
    width: width * 0.87,
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 4,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.023,
    fontWeight: '400',
    color: Colors.white,
  },

  // Datetime picker

  btnDateTime: {
    width: width * 0.87,
    height: height * 0.06,
    backgroundColor: Colors.gray2,
    marginTop: height * 0.015,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },

  textButtonDate: {
    fontFamily: Fonts.montserrat,
    color: Colors.gray,
    fontSize: height * 0.019,
    marginTop: height * 0.015,
    textAlign: 'center',
  },

  // Dropdown

  externalContainer: {
    position: 'absolute',
    top: height * 0.74,
    left: width * 0.065,
    justifyContent: 'center',
    width: width * 0.87,
    height: height * 0.06,
    marginBottom: height * 0.025,
    backgroundColor: Colors.gray2,
    borderWidth: 0.5,
    borderRadius: width * 0.04,
    borderColor: Colors.gray,
    padding: height * 0.0083,
  },

  selectdropdownContainer: {
    backgroundColor: Colors.gray2,
    height: height * 0.05,
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectdropdownText: {
    color: Colors.gray,
    fontSize: height * 0.021,
    fontFamily: Fonts.montserrat,
  },

  selectdropdownOptions: {
    marginTop: height * -0.037,
    backgroundColor: Colors.white,
  },

  selectdropdownContainerOption: {
    backgroundColor: Colors.orange,
  },

  selectdropdownSelectOption: {
    fontFamily: Fonts.montserrat,
  },

  selectdropdownTextOptions: {
    fontSize: height * 0.022,
  },
});

export default createUserStyles;
