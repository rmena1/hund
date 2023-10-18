import { FunctionComponent } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../styles/generalStyles";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const WalkerDetailScreen: FunctionComponent = () => {
  const insets = useSafeAreaInsets();

  const TEMP_IMAGE_URL = 'https://media.istockphoto.com/id/615279718/photo/businesswoman-portrait-on-white.jpg?s=612x612&w=0&k=20&c=Aa2Vy4faAPe9fAE68Z01jej9YqPqy-RbAteIlF3wcjk=';
  const TEMP_NAME = 'Ana Vera';
  const TEMP_MEMBER_SINCE = 'ago 2021';
  const TEMP_RATING = 4.3;
  const TEMP_AMOUNT_OF_WALKS = 30;
  const TEMP_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna.'

  const getStarValue = (forValue: number) => {
    const diff = TEMP_RATING - forValue + 1;

    if (diff >= 1) return 'star';
    if (diff >= 0.5) return 'star-half-full';
    return 'star-o';
  }

  return (
    <ScrollView style={{ ...insets, height: '100%', paddingHorizontal: 20, paddingVertical: 20, backgroundColor: 'white' }} >
      <View style={{ height: 320, width: '100%', padding: 10 }} >
        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }} >
          <View style={{ flex: 1, marginRight: 20, }} >
            <Image source={{ uri: TEMP_IMAGE_URL }} style={{ width: '100%', height: '100%', borderRadius: 20, borderColor: 'black', borderWidth: 1 }} />
          </View>
          <View style={{ height: '100%', flex: 1, paddingTop: 10 }} >
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>{TEMP_NAME}</Text>
              <Text style={{ textAlign: 'center', color: Colors.gray1 }}>Miembro desde {TEMP_MEMBER_SINCE}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.orange, flex: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: '50%', width: '100%', paddingTop: 20, flexDirection: 'row' }}>
          <View style={{ height: '100%', flex: 1, backgroundColor: '#FFF5F0FF', marginRight: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'space-evenly' }} >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Rating</Text>
              <Text style={{ fontSize: 15 }}>{TEMP_RATING}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name={getStarValue(1)} size={20} style={{ color: '#FDCC0D' }} />
              <FontAwesome name={getStarValue(2)} size={20} style={{ color: '#FDCC0D' }} />
              <FontAwesome name={getStarValue(3)} size={20} style={{ color: '#FDCC0D' }} />
              <FontAwesome name={getStarValue(4)} size={20} style={{ color: '#FDCC0D' }} />
              <FontAwesome name={getStarValue(5)} size={20} style={{ color: '#FDCC0D' }} />
            </View>
          </View>
          <View style={{ height: '100%', flex: 1, backgroundColor: '#FEFAEBFF', marginLeft: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'space-evenly' }} >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Paseos</Text>
              <Text style={{ fontSize: 15 }}>{TEMP_AMOUNT_OF_WALKS}</Text>
            </View>

            <View>
              <FontAwesome5 name={"dog"} size={20} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Descripción</Text>
        <Text style={{ fontSize: 18, color: Colors.gray, marginTop: 10 }}>{TEMP_DESCRIPTION}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Reviews</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: Colors.orange, fontSize: 15, marginRight: 10 }}>Ver Todos</Text>
            <FontAwesome5 name="caret-right" size={15} solid style={{ color: Colors.orange }} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={{ height: 150, width: '100%', marginTop: 10 }}
          contentContainerStyle={{
            // amount items minus 1
            width: `${(5 - 1) * 100}%`,
            marginRight: 100,
            columnGap: 20
          }}
          alwaysBounceHorizontal={true}
          bounces={true}
        >
          {new Array(5).fill(0).map((_, idx) => (
            <View key={idx} style={{ flex: 1, backgroundColor: Colors.gray2, borderRadius: 10, padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: TEMP_IMAGE_URL }} style={{ width: 60, height: 60, borderRadius: 9999 }} />
                <View style={{ marginLeft: 20 }}>
                  <Text>Nombre</Text>
                  <Text>Hace x días.</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <FontAwesome name={getStarValue(1)} size={15} style={{ color: '#FDCC0D' }} />
                    <FontAwesome name={getStarValue(2)} size={15} style={{ color: '#FDCC0D' }} />
                    <FontAwesome name={getStarValue(3)} size={15} style={{ color: '#FDCC0D' }} />
                    <FontAwesome name={getStarValue(4)} size={15} style={{ color: '#FDCC0D' }} />
                    <FontAwesome name={getStarValue(5)} size={15} style={{ color: '#FDCC0D' }} />
                  </View>
                </View>
              </View>
              <Text style={{ marginTop: 20 }}>{TEMP_DESCRIPTION.slice(0, 100)}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default WalkerDetailScreen;
