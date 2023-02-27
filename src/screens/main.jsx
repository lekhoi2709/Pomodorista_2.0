import { Text, Box, Center } from 'native-base';

export default function Main() {
   return (
      <Center flex={1} _dark={{ bg: "primary.900" }} _light={{ bg: "light.100" }}>
         <Box>
            <Text>Hello World!</Text>
         </Box>
      </Center>
   );
}