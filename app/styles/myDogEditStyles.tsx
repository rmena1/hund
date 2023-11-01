import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const myDogEditStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  title: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.4,
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
    top: height * 0.33,
    left: width * 0.06,
  },

  textboxContainer2: {
    position: 'absolute',
    top: height * 0.43,
    left: width * 0.06,
  },

  textboxContainer3: {
    position: 'absolute',
    top: height * 0.53,
    left: width * 0.06,
  },

  textboxContainer4: {
    position: 'absolute',
    top: height * 0.63,
    left: width * 0.06,
  },

  inputDescription: {
    width: width * 0.87,
    height: height * 0.13,
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.021,
    fontWeight: '400',
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },

  textboxContainer5: {
    position: 'absolute',
    top: height * 0.81,
    left: width * 0.06,
    opacity: 1,
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

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.023,
    fontWeight: '400',
    color: Colors.white,
  },

  // Dropdown

  externalContainer: {
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
    marginTop: height * -0.044,
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

export default myDogEditStyles;
