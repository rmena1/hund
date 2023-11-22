import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native';
const { height } = Dimensions.get('window');

export const paymentMethodStyles = StyleSheet.create({
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
    color: Colors.gray3,
    fontFamily: Fonts.poppins,
    fontSize: height * 0.025,
    fontWeight: '700',
    lineHeight: height * 0.04,
  },

  scrollContainer: {},

  noCards: {
    fontFamily: Fonts.montserrat,
    paddingTop: 16,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flexDirection: 'row',
    height: height * 0.08,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFFFFFFF',

    // Box shadow for iOS
    shadowColor: '#171a1f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // Box shadow for Android
    elevation: 2,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedCard: {
    flexDirection: 'column',
    height: height * 0.16,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.orange,

    // Box shadow for iOS
    shadowColor: '#171a1f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // Box shadow for Android
    elevation: 2,
    backgroundColor: 'white',
  },
  selectedCardTopContainer: {
    height: height * 0.08,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectedCardDetails: {
    flexDirection: 'row',
  },

  cardTitle: {
    fontFamily: Fonts.montserratBold,
    fontSize: height * 0.02,
    fontWeight: '700',
    lineHeight: height * 0.03,
    color: Colors.gray3,
    paddingRight: 16,
  },
  cardDetails: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.02,
    fontWeight: '400',
    lineHeight: height * 0.03,
    color: Colors.gray3,
    paddingRight: 16,
  },

  buttonContainer: {
    alignItems: 'flex-start',
  },

  optionsButton: {
    flexDirection: 'row',
    marginVertical: 2,
    marginLeft: 16,
    gap: 8,
  },

  cardOption: {
    fontFamily: Fonts.montserrat,
    fontSize: height * 0.015,
    fontWeight: '400',
    color: Colors.gray3,
    lineHeight: height * 0.025,
    alignItems: 'center',
  },

  visa: {
    height: 45,
    width: 45,
    marginLeft: 16,
    resizeMode: 'contain',
  },

  mastercard: {
    height: 50,
    width: 50,
    marginLeft: 16,
    resizeMode: 'contain',
  },

  creditcard: {
    height: 50,
    width: 50,
    marginLeft: 16,
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

  additionalInfo: {
    position: 'relative',
    top: 16,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.orange,
  },
});

export default paymentMethodStyles;
