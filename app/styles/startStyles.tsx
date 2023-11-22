import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const startStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: Fonts.poppins,
    fontSize: height * 0.04,
    fontWeight: '700',
    lineHeight: height * 0.06,
    color: Colors.neutral,
    textAlign: 'center',
  },

  subTitle: {
    flex: 1,
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.022,
    fontWeight: '300',
    lineHeight: height * 0.03,
    color: Colors.gray,
    textAlign: 'center',
  },

  image: {
    width: width * 0.77,
    height: height * 0.18,
  },

  buttonContainer: {
    marginBottom: height * 0.03,
  },

  button: {
    width: width * 0.91,
    height: height * 0.07,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.montserrat,
    backgroundColor: Colors.orange,
    borderRadius: 8,
    marginBottom: height * 0.01,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.024,
    color: Colors.white,
  },

  buttonCreate: {
    width: width * 0.91,
    height: height * 0.07,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.montserrat,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: height * 0.01,
    borderWidth: 1,
    borderColor: Colors.orange,
  },

  buttonTextCreate: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.024,
    color: Colors.orange,
  },
});

export default startStyles;
