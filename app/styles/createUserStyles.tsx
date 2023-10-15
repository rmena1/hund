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
    top: 53,
    left: 137,
    fontFamily: Fonts.poppins,
    fontSize: 20,
    fontWeight: '700', 
    lineHeight: 30,
    color: Colors.gray3, 
  },

  subtitle: {
    position: 'absolute',
    top: 530,
    left: 28,
    width: 335,
    height: 26,
    fontFamily: Fonts.poppins, 
    fontSize: 16,
    fontWeight: '600', 
    lineHeight: 26,
    color: Colors.neutral, 
  },

  group: {
    position: 'absolute',
    top: 128,
    left: 141,
    width: 108,
    height: 108,
    backgroundColor: Colors.gray4,
  },

  // Container gris claro foto
  container: {
    position: 'absolute',
    top: 4,
    left: 0,
    width: 104,
    height: 104,
    backgroundColor: Colors.gray2, // #FFFFFFB3 en formato rgba
    borderRadius: 52,
    shadowColor: '#171a1f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  avatar: {
    position: 'absolute',
    top: 11,
    left: 8,
    width: 88,
    height: 88,
    backgroundColor: '#9095A1FF', // #9095A1FF en formato de color
    opacity: 1,
    overflow: 'hidden',
    borderRadius: 44,
  },

   button: {
    position: 'absolute',
    top: 0,
    left: 72,
    width: 32,
    height: 32,
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF', // #FFFFFFFF en formato de color
    backgroundColor: '#FF5400FF', // #FF5400FF en formato de color
    opacity: 1,
    borderWidth: 0,
    borderRadius: 16,
    shadowColor: '#FF5400',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 9,
    elevation: 2, // Android shadow elevation
    margin: 0,
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
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },

  containerCheckbox: {
    flexDirection: 'column', 
    marginLeft: 28, 
    marginTop: 570,
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 10, 
  },

  checkbox: {
    backgroundColor: 'transparent', 
    borderWidth: 0, 
    padding: 0, 
  },
  
  checkboxLabel: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 10
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
    borderRadius: 4,
  },

  buttonCreateDisabled: {
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
    backgroundColor: Colors.gray, 
    opacity: 1,
    borderRadius: 4,
  },

  buttonText: {
    fontFamily: Fonts.montserrat, 
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },

  // Datetime picker

  datetimePicker: {
    height: 62,
    alignContent: 'center',
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: Colors.orange,
  },

  btnDateTime: {
    width: 330,
    height: 45,
    backgroundColor: Colors.gray2,
    marginTop: 4,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },

  textButtonDate: {
    fontFamily: Fonts.montserrat,
    color: Colors.gray,
    fontSize: 14,
    marginTop: 12,
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