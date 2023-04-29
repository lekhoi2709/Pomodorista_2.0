import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from '../theme.js'

export default function AppContainer(props) {
   return (
      <NavigationContainer className="w-screen h-screen">
         <NativeBaseProvider className="w-full h-full" theme={theme}>
            {props.children}
         </NativeBaseProvider>
      </NavigationContainer>
   );
}