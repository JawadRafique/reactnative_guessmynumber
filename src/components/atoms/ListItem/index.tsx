import { View, Text, ListRenderItem  } from 'react-native'
import React from 'react'
import { styles } from './listItem.styles'

const ListItem: ListRenderItem<number> = ({item, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess {++index}</Text>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

export default ListItem