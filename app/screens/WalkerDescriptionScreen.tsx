import { FunctionComponent } from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const WalkerDescriptionScreen: FunctionComponent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...insets, height: "100%", backgroundColor: 'red' }}>
      <View style={{}}>

      </View>
    </View>
  )
}

export default WalkerDescriptionScreen;