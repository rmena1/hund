import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native';
const { height, width } = Dimensions.get('window');

export const createMyDogsStyles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: '100%',
    backgroundColor: Colors.white,
  },

  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: Colors.gray3,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.025,
    fontWeight: '700',
    lineHeight: height * 0.04,
  },

  backButton: {
    position: 'absolute',
    left: 16,
  },

  table: {
    position: 'absolute',
    backgroundColor: Colors.white,
    top: height * 0.15,
    width: width,
    height: height * 0.75,
  },

  image: {
    marginLeft: width * 0.02,
    backgroundColor: Colors.lightOrange,
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: 100,
  },

  container: {
    marginLeft: width * -0.05,
  },

  headerText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.02,
    fontWeight: '700',
    color: Colors.neutral,
  },

  breedText: {
    width: 229,
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.018,
    fontWeight: '400',
    color: Colors.gray6,
  },

  icon: {
    fontSize: 24,
  },

  container2: {
    marginBottom: 10,
  },
  content: {
    padding: 20,
    width: '100%',
    backgroundColor: Colors.lightOrange,
    borderRadius: 0,
  },
  titleContent: {
    fontFamily: Fonts.poppins,
    fontSize: height * 0.018,
    fontWeight: '700',
    lineHeight: 22,
    color: Colors.neutral,
  },
  textContent: {
    width: '100%',
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.018,
    color: Colors.gray6,
  },

  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 16,
  },

  buttonAddText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.04,
    color: Colors.white,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.01,
  },

  buttonDelete: {
    width: width * 0.43,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: Colors.orange2,
  },

  buttonDeleteText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.018,
    fontWeight: '400',
    color: Colors.orange2,
  },

  buttonEdit: {
    width: width * 0.43,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: width * 0.01,
  },

  buttonEditText: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.018,
    fontWeight: '400',
    color: Colors.white,
  },

  textNoDogs: {
    marginTop: height * 0.2,
    textAlign: 'center',
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.025,
    color: Colors.gray6,
  },
});

export default createMyDogsStyles;
