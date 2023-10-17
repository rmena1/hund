import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const loadImageFromGallery = async (array: [number, number]) => {
  const response: any = { status: false, image: null };
  const resultPermissions = await Permissions.askAsync(Permissions.CAMERA);
  if (resultPermissions.status === "denied") {
    Alert.alert(
      "Debes darle permisos para acceder a las imágenes del teléfono"
    );
    return response;
  }
  const result: any = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: array,
  });
  if (result.canceled) {
    return response;
  }
  response.status = true;
  response.image = result.assets[0];
  return response;
};

export const fileToBlob = async (path: any) => {
  const file = await fetch(path.uri);
  const blob = await file.blob();
  return blob;
};
