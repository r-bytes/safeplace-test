import React from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../styles/global"

type Props = {}

const NewComplaint = (props: Props) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> NewComplaint </Text>
    </View>
  )
}

export default NewComplaint
