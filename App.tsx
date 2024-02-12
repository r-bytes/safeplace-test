import React from "react"
import { View } from "react-native"
import { Button } from "./components"
import usePushNotifications from "./hooks/usePushNotifications"

export default function App() {
  const { sendPushNotification } = usePushNotifications()

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button label="Press to send notification" onPress={sendPushNotification} theme="primary" />
    </View>
  )
}
