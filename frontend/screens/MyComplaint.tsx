import React from "react"
import { Text, View } from "react-native"
import type { NavigationRoute } from "react-navigation"
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types"
import { Button } from "../components"
import { globalStyles } from "../styles/global"

type Props = {}

const MyComplaint = ({ navigation }: { navigation: StackNavigationProp<NavigationRoute> }) => {
  const pressHandler = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={globalStyles.container}>
      {/* <View style={globalStyles.container}>d</View> */}
      <Text style={globalStyles.titleText}> MyComplaint </Text>
      <Button label="Back" theme="primary" onPress={pressHandler} />
    </View>
  )
}

export default MyComplaint
