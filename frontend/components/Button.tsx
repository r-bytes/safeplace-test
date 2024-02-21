import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"
import { buttonStyles } from "../styles/global"

export default function Button({
  label,
  theme,
  onPress,
}: {
  label: string
  theme?: "primary" | "secondary"
  onPress?: () => void
}) {
  if (theme === "primary") {
    return (
      <View style={[buttonStyles.buttonContainer]}>
        <Pressable style={[buttonStyles.button, { backgroundColor: "#D52828" }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#ffffff" style={buttonStyles.buttonIcon} />
          <Text style={[buttonStyles.buttonLabel, { color: "#ffffff" }]}>{label}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={buttonStyles.buttonContainer}>
      <Pressable style={[buttonStyles.button, {borderWidth: 2}]} onPress={onPress}>
        <Text style={[buttonStyles.buttonLabel, { color: "#000" }]}> {label}</Text>
      </Pressable>
    </View>
  )
}
