import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tabs.Screen 
        name='feed'  // file name that you are targeting for styling
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          title: 'Feed',  // if this wasn't here, then title would default to file name
        }}
      />
      <Tabs.Screen 
        name='search'
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
          title: 'Search',
        }}
      />
      <Tabs.Screen 
        name='messages'
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  )
}