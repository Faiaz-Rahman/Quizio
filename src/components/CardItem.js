import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DIM, COLORS } from '../constant'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CardItem({ card, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <AntDesign
          name={'questioncircle'}
          size={40}
          color={COLORS.lighter_primary}
          style={styles.iconStyle}
        />
        <Text
          style={{
            color: COLORS.light_primary,
            fontSize: 13,
            fontWeight: '800',
            letterSpacing: 1.5,
          }}>
          {card ? card : 'Nothing'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: DIM.width * 0.27,
    // width: 'auto',
    height: DIM.height * 0.17,
    backgroundColor: COLORS.lighter_primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginRight: 15,
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '80%',
    width: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginBottom: 10,
  },
})
