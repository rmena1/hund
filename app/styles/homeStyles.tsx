import { Colors, Fonts } from "./generalStyles";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
  },

  imageRegister: {
    position: "absolute",
    top: 35,
    left: 7,
    width: 403,
    height: 403,
    borderRadius: 0,
  },
});

export default loginStyles;
