// define a layout for your app
// 3 layout - stack, 

import { Stack, useRouter } from "expo-router";
import { Alert } from "react-native";
import { Feather } from '@expo/vector-icons';

export default () => {
  const router = useRouter()
  
  return (
    <Stack 
      screenOptions={{ 
        headerStyle: { 
          backgroundColor: 'cornflowerblue' 
        }, 
        headerTintColor: 'cornsilk', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
    >
      <Stack.Screen
        name='index' 
        options={{ 
          title: 'Home',
          headerRight: () => (
            <Feather 
              onPress={() => router.push('/modal')}   // navigate to the modal sceen/file
              name="info" 
              size={24} 
              color="midnightblue" 
            />
          )
        }} 
      />
      <Stack.Screen 
        name='modal' 
        options={{ 
          presentation: 'modal',  //indicates that the modal screen should be of type modal
          headerStyle: { 
            backgroundColor: 'white' 
          },
          headerTintColor: 'cornflowerblue'  
        }} 
      />
    </Stack>
  )
}