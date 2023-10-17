import { Colors, Fonts } from "./generalStyles";
import { StyleSheet } from "react-native";

export const startStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1.5,
    justifyContent: "flex-end",
  },

  title: {
    fontFamily: Fonts.poppins,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 48,
    color: Colors.neutral,
    textAlign: "center",
  },

  subTitle: {
    flex: 1,
    width: 288,
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 28,
    color: Colors.gray,
    textAlign: "center",
  },

  image: {
    width: 288,
    height: 144,
  },

  buttonContainer: {
    marginBottom: 32,
    spacing: 16,
  },

  button: {
    width: 350,
    height: 52,
    padding: 0,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.white,
    backgroundColor: Colors.orange,
    opacity: 1,
    borderRadius: 8,
    marginBottom: 8,
  },

  buttonText: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.white,
  },

  buttonCreate: {
    width: 350,
    height: 52,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.orange,
    backgroundColor: Colors.white,
    opacity: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.orange,
    borderStyle: "solid",
  },

  buttonTextCreate: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 28,
    color: Colors.orange,
  },
});

export default startStyles;
