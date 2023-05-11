import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams, Stack } from 'expo-router'

const profile = () => {
  const router = useRouter()
  const { name, username } = useSearchParams()
  
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: `@${username}`,
          headerStyle: { 
            backgroundColor: 'cornsilk' 
          }, 
          headerTintColor: 'cornflowerblue',
        }} 
      />

      <Text style={{fontSize: 30}}>Hello {name} (@{username})</Text>
      <Button title='Go Back' onPress={ () => router.back() } />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})