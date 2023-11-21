import { StyleSheet } from 'react-native';
import { Colors, Fonts } from './generalStyles';

export const walkerHomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white, // Using the color from generalStyles
  },
  text: {
    fontFamily: Fonts.poppins, // Using the font from generalStyles
    fontSize: 16,
    color: Colors.black, // Assuming you have a color for dark text
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.orange, // Assuming you have a orange color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: Fonts.poppinsBold, // Using the bold font
    color: Colors.white, // Assuming white is defined in your Colors
    fontSize: 16,
  },
  title: {
    fontFamily: Fonts.poppinsBold, // Using the bold font
    fontSize: 22,
    color: Colors.black, // Assuming you have a specific color for titles
    marginBottom: 15,
  },
  instruction: {
    fontFamily: Fonts.poppins, // Regular font
    fontSize: 18,
    color: Colors.black, // Assuming you have a secondary text color
    textAlign: 'center',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  activeStar: {
    fontSize: 30,
    color: 'gold', // or any color for active stars
    marginHorizontal: 5,
  },
  inactiveStar: {
    fontSize: 30,
    color: 'grey', // or any color for inactive stars
    marginHorizontal: 5,
  },
  // ... any other styles
});

export default walkerHomeScreenStyles;
