import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native';
const { height } = Dimensions.get('window');

export const paymentMethodStyles = StyleSheet.create({
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

  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 16,
  },
});

export default paymentMethodStyles;
