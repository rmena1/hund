import { Colors, Fonts } from './generalStyles';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

export const CreateMyDogsScreen = StyleSheet.create({
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

    table: {
        position: 'absolute',
        top: 140,
        width: '100%',
        height: '73%',
        opacity: 1,
        borderRadius: 0, 
    },

      header: {
        height: height * 0.12,
        borderWidth: 0.5,
        borderColor: Colors.gray,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 26,
        color: Colors.neutral,
      },

      breedText: {
        width: 229,
        fontFamily: Fonts.montserrat, 
        fontSize: height * 0.018,
        fontWeight: '400',
        lineHeight: 22,
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

      buttonAdd: {
        position: 'absolute',
        top: height * 0.94,
        left: width * 0.8,
        width: width * 0.13,
        height: width * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white, 
        backgroundColor: Colors.orange, 
        borderRadius: width * 0.065,
      },

      buttonAddText: {
        fontFamily: Fonts.montserrat,
        fontSize: height * 0.04,
        color: Colors.white,
      },

      buttonContainer: 
      {
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

});

export default CreateMyDogsScreen;