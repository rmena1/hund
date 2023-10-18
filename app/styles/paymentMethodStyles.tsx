import { Colors, Fonts } from './generalStyles';
import { StyleSheet, Platform, StatusBar } from 'react-native';


export const paymentMethodStyles = StyleSheet.create({

  AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      height: '100%',
      backgroundColor: Colors.white,
  },

  header:{
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle:{
    fontFamily: Fonts.poppins,
    fontSize: 20,
    color: Colors.gray3,
  },

  backButton:{
    position: 'absolute',
    left: 16,
  },
  
  addButton:{
    position: 'absolute',
    bottom: 32,
    right: 16,
  },

});

export default paymentMethodStyles;