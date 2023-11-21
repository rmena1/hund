import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const createWalkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: Colors.white,
  },

  title: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.035,
    fontWeight: '700',
    lineHeight: 35,
    color: Colors.neutral,
    marginTop: height * 0.025,
    marginBottom: height * 0.025,
    textAlign: 'center',
  },
  label: {
    fontSize: height * 0.023,
    marginTop: height * 0.03,
    marginBottom: height * 0.02,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonLarge: {
    marginBottom: '5%',
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray1,
  },
  buttonLargeEnd: {
    marginBottom: '5%',
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 8,
  },
  buttonShort: {
    marginTop: height * 0.01,
    marginLeft: '5%',
    width: width * 0.26,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray1,
  },
  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.gray1,
  },
  containerTextEnd: {
    top: height * 0.04,
    left: width * -0.055,
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: '5%',
  },

  iconBack: {
    position: 'absolute',
    fill: Colors.neutral,
    color: Colors.gray1,
  },

  buttonTextEnd: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },
  immediateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: width * 0.11,
    height: 100,
  },
});
export default createWalkStyles;
