// define a layout for your app
// 3 layout - stack, 

import { Stack } from "expo-router";
import { Alert } from "react-native";
import { Feather } from '@expo/vector-icons';

export default () => {
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
        headerRight: () => (
          <Feather 
            onPress={() => Alert.alert('More info')}
            name="info" 
            size={24} 
            color="midnightblue" 
          />
        )
      }} 
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
    </Stack>
  )
}