import { Colors } from './generalStyles';
import { StyleSheet } from 'react-native';

export const startStyles = StyleSheet.create({
    page: {
        position: 'absolute',
        backgroundColor: Colors.white,
    },

    title: {
        position: 'absolute',
        top: 228,
        left: 155,
        /* fontFamily: 'Poppins',  */
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 48,
        color: Colors.neutral,
      },

      subTitle: {
        position: 'absolute',
        top: 445,
        left: 105,
        width: 288,
       /*  fontFamily: 'Montserrat',  */
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 28,
        color: Colors.gray, 
      },

      image: {
        position: 'absolute',
        top: 292,
        left: 51,
        width: 288,
        height: 144,
      },

      button: {
        position: 'absolute',
        top: 660,
        left: 20,
        width: 350,
        height: 52,
        padding: 0,
        paddingHorizontal: 20, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     /*    fontFamily: 'Montserrat',  */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.white,
        backgroundColor: Colors.orange, 
        opacity: 1,
        borderRadius: 8, 
      },

      buttonText: {
       /*  fontFamily: 'Montserrat', */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.white,
      },

      buttonCreate: {
        position: 'absolute',
        top: 730,
        left: 20,
        width: 350,
        height: 52,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       /*  fontFamily: 'Montserrat',  */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.orange, 
        backgroundColor: Colors.white, 
        opacity: 1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.orange, 
        borderStyle: 'solid',
      },

      buttonTextCreate: {
       /*  fontFamily: 'Montserrat',  */
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
        color: Colors.orange, 
      },

});

export default startStyles;