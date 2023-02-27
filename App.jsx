import AppContainer from "./src/components/app-container";
import Main from "./src/screens/main";
import { Box } from "native-base";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyNav() {
   return (
      <Box flex={1}>
         <Drawer.Navigator>
            <Drawer.Screen name="Main" component={Main} />
         </Drawer.Navigator>
      </Box>
   )
}

export default function App() {
   return (
      <AppContainer>
         <MyNav />
      </AppContainer>
   );
}
