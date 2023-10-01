import { Colors } from './generalStyles';
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    page: {
        position: 'absolute',
        backgroundColor: Colors.white,
      },

    imageRegister: {
        position: 'absolute',
        top: 35,
        left: 7,
        width: 403,
        height: 403,
        borderRadius: 0,
      },

    imageLogin: {
        position: 'absolute',
        top: 65,
        left: 4,
        width: 590,
        height: 270,
        borderRadius: 0,
      }, 

    container: {
        position: 'absolute',
        top: 240,
        left: 0,
        width: 390,
        height: 664,
        backgroundColor: Colors.white, 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: Colors.shadow,
        shadowOffset: {
          width: 0,
          height: 17,
        },
        shadowOpacity: 0.41,
        shadowRadius: 17, 
        elevation: 2, 
      },

    title: {
        position: 'absolute',
        top: 28,
        left: 28,
       /*  fontFamily: 'Poppins',  */
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 48,
        color: Colors.neutral, 
      },

    subtitle: {
        position: 'absolute',
        top: 76,
        left: 28,
        width: 335,
    /*     fontFamily: 'Montserrat',  */
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        color: Colors.gray,
      },

      subtitle2: {
        position: 'absolute',
        top: 520,
        left: 85,
       /*  fontFamily: 'Montserrat', */
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        color: Colors.gray,
      },

      subtitle3: {
        position: 'absolute',
        top: 520,
        left: 243,
        /* fontFamily: 'Montserrat', */ 
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        color: Colors.orange,
        textDecorationLine: 'underline',
      },

      textboxContainer: {
        position: 'absolute',
        top: 145,
        left: 28,
        opacity: 1,
      },

      textboxContainer2: {
        position: 'absolute',
        top: 235,
        left: 28,
        opacity: 1,
      },

      input: {
        width: 335,
        height: 44,
        paddingLeft: 44,
        paddingRight: 16,
        /* fontFamily: 'Montserrat', */
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 26,
        backgroundColor: Colors.gray2, 
        borderRadius: 4,
        color: Colors.neutral, 
      },

      inputFilled: {
        width: 335,
        height: 44,
        paddingLeft: 44,
        paddingRight: 16,
       /*  fontFamily: 'Montserrat', */ 
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 26,
        backgroundColor: Colors.gray2, 
        borderRadius: 4,
        color: Colors.gray,
    },

      icon: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 20,
        height: 20,
        fill: Colors.neutral, 
      },
      label: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 20,
      },
      leftIcon: {
        left: 16,
      },

      button: {
        position: 'absolute',
        top: 358,
        left: 20,
        width: 350,
        height: 52,
        padding: 0,
        paddingHorizontal: 20, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       /*  fontFamily: 'Montserrat', */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.white,
        backgroundColor: Colors.orange, 
        opacity: 1,
        borderRadius: 8, 
      },

      buttonText: {
       /*  fontFamily: 'Montserrat',  */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.white,
      },
})

export default loginStyles;