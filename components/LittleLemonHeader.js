import { View, Text } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.10, backgroundColor: '#F4CE14',  alignItems:'center',
    justifyContent:'center' }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black'
        
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
