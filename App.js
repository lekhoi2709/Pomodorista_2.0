import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
   return (
      <View className="justify-center align-middle items-center h-screen">
         <Text className="text-red-500">Hello World! test Expo</Text>
         <StatusBar style="auto" />
      </View>
   );
}
