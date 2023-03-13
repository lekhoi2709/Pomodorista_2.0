import Main from '../screens/main'
import { Box } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function MyNav() {
   return (
      <Box flex={1}>
         <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Main} />
         </Drawer.Navigator>
      </Box>
   )
}
