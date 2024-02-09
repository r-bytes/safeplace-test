import * as Notifications from "expo-notifications"
import React, { useEffect, useRef } from "react"
import { Alert, Button, View } from "react-native"
import usePushNotifications from "./hooks/usePushNotifications"

export default function App() {
  const { sendPushNotification } = usePushNotifications()
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Press to send notification" onPress={sendPushNotification} />
    </View>
  )
}
