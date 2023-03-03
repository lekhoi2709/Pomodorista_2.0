import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function AppContainer(props) {
   return (
      <NavigationContainer className="w-screen h-screen">
         <NativeBaseProvider className="w-full h-full">
            {props.children}
         </NativeBaseProvider>
      </NavigationContainer>
   );
}