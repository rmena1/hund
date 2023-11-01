import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const WalkerAtributeScreen = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  title: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.38,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.025,
    fontWeight: '700',
    lineHeight: height * 0.04,
    color: Colors.gray3,
  },

  subtitleBlack: {
    // position: 'absolute',
    // top: 142,
    // left: 20,
    // width: 279,
    margin: 6,
    fontFamily: Fonts.montserrat,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.black,
  },

  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    color: Colors.orange,
  },

  subtitle: {
    position: 'absolute',
    top: 142,
    left: 20,
    width: 279,
    fontFamily: Fonts.montserrat,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.orange,
  },

  subtitle2: {
    position: 'absolute',
    top: 350,
    left: 20,
    width: 279,
    fontFamily: Fonts.montserrat,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.orange,
  },

  subtitle3: {
    position: 'absolute',
    top: 494,
    left: 20,
    width: 279,
    fontFamily: Fonts.montserrat,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.orange,
  },
  subtitle4: {
    position: 'absolute',
    top: 629,
    left: 20,
    width: 279,
    fontFamily: Fonts.montserrat,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.orange,
  },

  table: {
    position: 'absolute',
    top: 174,
    left: 20,
    width: 350,
    height: 144,
    opacity: 1,
    borderRadius: 4, // border-m
    // boxShadow: , /* shadow-none */
  },

  // Dropdown

  externalContainer: {
    position: 'absolute',
    top: height * 0.8,
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

  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    color: Colors.orange,
  },

  button: {
    position: 'absolute',
    top: 750,
    //marginTop: "5%",
    width: '50%',
    height: 52,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
    backgroundColor: Colors.orange,
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },

  container: {
    // flexDirection: 'row',      // Horizontal layout
    // alignItems: 'center',     // Center-align elements
    // justifyContent: 'space-between', // Space between elements
    // marginVertical: 10,      // Adjust the vertical margin as needed
    position: 'absolute',
    top: 382,
    left: 20,
    width: 350,
    height: 80,
    backgroundColor: '#FFFFFFFF', // white
    borderRadius: 4, // border-m
    borderWidth: 1,
    borderColor: '#DEE1E6FF', // neutral-300
    borderStyle: 'solid',
    // boxShadow: , /* shadow-none */
  },

  slidecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },

  container2: {
    position: 'absolute',
    top: 518,
    left: 20,
    width: 350,
    height: 80,
    backgroundColor: '#FFFFFFFF', // white
    borderRadius: 4, // border-m
    borderWidth: 1,
    borderColor: '#DEE1E6FF', // neutral-300
    borderStyle: 'solid',
    // boxShadow: , /* shadow-none */
  },

  /* Slider 1 */
  slider: {
    width: '80%',
    height: 40,
  },

  minslider: {
    marginRight: 10,
    padding: 5,
  },

  maxslider: {
    marginLeft: 0,
  },

  /* Slider 1 - Handle */
  '.slider .handle': {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: Colors.white /* white */,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FF5400FF' /* primary-500 */,
    borderStyle: 'solid',
  },

  /* Slider 1 - Handle 1 */
  '.slider .handle.handle-1': {
    left: 140,
    top: 0,
  },

  /* Slider 1 - Handle 2 */
  '.slider .handle.handle-2': {
    left: 39,
    top: 0,
  },

  /* Slider 1 - Track */
  '.slider .track': {
    position: 'absolute',
    top: 8,
    width: 301,
    height: 6,
    backgroundColor: '#FFCDB4FF' /* primary-200 */,
    overflow: 'hidden',
    zIndex: -1,
    borderRadius: 3,
  },

  /* Slider 1 - Active track */
  '.slider .track .active': {
    position: 'absolute',
    left: 50,
    width: 100,
    height: 6,
    backgroundColor: '#FF5400FF' /* primary-500 */,
  },
  /* Slider 1 - Tick marks */
  '.slider .tick-mark': {
    width: 3,
    height: 3,
    backgroundColor: '#FF5400FF' /* primary-500 */,
    borderRadius: 100,
  },

  /* Slider 1 - Active tick marks */
  '.slider .tick-mark.active': {
    // add your styles here
    backgroundColor: '#FFCDB4FF' /* primary-200 */,
  },
});

export default WalkerAtributeScreen;
