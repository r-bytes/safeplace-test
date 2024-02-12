import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

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
      <View style={[styles.buttonContainer, { borderWidth: 2, borderRadius: 32, borderColor: "#D52828" }]}>
        <Pressable style={[styles.button, { backgroundColor: "#D52828" }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#ffffff" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: "#ffffff" }]}>{label}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        style={styles.button} 
        onPress={onPress}
    >
        <Text style={styles.buttonLabel}> {label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 32,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
})
