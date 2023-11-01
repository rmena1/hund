import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native';
const { height } = Dimensions.get('window');

export const addCardStyles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: '100%',
  },

  header: {
    backgroundColor: Colors.white,
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

  formContainer: {
    flexDirection: 'column',
    flexGrow: 1,
  },

  formBox: {
    marginHorizontal: 24,
    marginVertical: 12,
    height: 64,
  },

  inputContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    borderWidth: 0,
  },

  icon: {
    marginHorizontal: 12,
    color: Colors.orange,
  },

  boxHorizontal: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 12,
    height: 64,
    justifyContent: 'space-between',
  },

  formBoxHorizontal: {
    width: '48%',
  },

  formText: {
    fontFamily: Fonts.poppins,
    fontSize: 15,
  },

  formInput: {
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    borderWidth: 0,
    flexGrow: 1,
    paddingHorizontal: 12,
    fontFamily: Fonts.montserrat,
    fontSize: 15,
  },

  formInputWithIconContainer: {
    height: '100%',
    flex: 1,
  },

  formInputWithIcon: {
    paddingRight: 12,
    fontFamily: Fonts.montserrat,
    fontSize: 15,
    flex: 1,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 32,
    height: height * 0.07,
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
