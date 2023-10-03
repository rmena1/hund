import { Colors, Fonts } from './generalStyles';
import { StyleSheet } from 'react-native';

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
    top: 516,
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
    backgroundColor: 'blue',
  },

  // Container gris claro foto
  container: {
    position: 'absolute',
    top: 4,
    left: 0,
    width: 104,
    height: 104,
    backgroundColor: Colors.gray4, 
    borderRadius: 52,
    shadowColor: '#171a1f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1, 
    shadowRadius: 5, 
  },

  button: {
    position: 'absolute',
    top: 0,
    left: 72,
    width: 32,
    height: 32,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    backgroundColor: Colors.orange,
    opacity: 1,
    borderRadius: 16,
    shadowColor: '#FF5400',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 9,
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
    fontFamily: 'Montserrat',
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
    shadowColor: '#ff5400',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 9,
  },

  buttonText: {
    fontFamily: Fonts.montserrat, 
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.white,
  },
});

export default createUserStyles;