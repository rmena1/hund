import { Colors, Fonts } from "./generalStyles";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    minHeight: "100%",
  },

  imageRegister: {
    width: "100%",
    height: "25%",
    alignSelf: "center",
    marginTop: "10%",
    resizeMode: "cover",
  },

  imageLogin: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginTop: "10%",
  },

  container: {
    flex: 1,
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
    paddingHorizontal: "5%",
  },

  title: {
    marginTop: "5%",
    fontFamily: Fonts.poppins,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 48,
    color: Colors.neutral,
  },

  subtitle: {
    marginTop: "2%",
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 30,
    color: Colors.gray,
  },

  subtitle2: {
    marginTop: "10%",
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: Colors.neutral,
  },

  subtitle3: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: Colors.orange,
    textDecorationLine: "underline",
    marginBottom: 50,
  },

  textboxContainer: {
    marginTop: "5%",
  },

  textboxContainer2: {
    marginTop: "2%",
  },

  input: {
    width: "100%",
    height: 44,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    backgroundColor: Colors.gray2,
    borderRadius: 4,
    color: Colors.neutral,
  },

  icon: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 20,
    height: 20,
    fill: Colors.neutral,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 20,
  },

  button: {
    marginTop: "5%",
    width: "90%",
    height: 52,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.white,
    backgroundColor: Colors.orange,
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.white,
  },
});

export default loginStyles;
