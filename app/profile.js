import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'

const profile = () => {
  const router = useRouter()
  const { name, surname } = useSearchParams()
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Hello {name}</Text>
      
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