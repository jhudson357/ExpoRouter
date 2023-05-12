import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Messages = () => {
  return (
    <View>
      <Link href='/home/messages/1' style={{margin: 10, fontSize: 24}}>Messages with James</Link>
      <Link href='/home/messages/2' style={{margin: 10, fontSize: 24}}>Messages with Pattie</Link>
      <Link href='/home/messages/3' style={{margin: 10, fontSize: 24}}>Messages with Lucas</Link>
    </View>
  )
}

export default Messages