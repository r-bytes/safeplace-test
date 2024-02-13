import React from "react"
import { Text, View } from "react-native"
import { Button } from "../components"
import usePushNotifications from "../hooks/usePushNotifications"
import { globalStyles } from "../styles/global"

type Props = {}

const Login = (props: Props) => {
  const { sendPushNotification, isLoggedIn } = usePushNotifications()
  const PLACEHOLDER_TITLE = "Welkom"
  const PLACEHOLDER_DETAILS = "Druk op onderstaande knop om door te gaan."
  const PLACEHOLDER_DETAILS2 =
    "Er wordt vervolgens een push notificatie verstuurd die in de app geaccepteerd dient te worden."
  return (
    <View style={[globalStyles.container]}>
      <View>
        <Text style={[globalStyles.titleText, { color: "#25292e" }]}>{PLACEHOLDER_TITLE}</Text>
      </View>
      <View>
        <Text style={[globalStyles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS}</Text>
        <Text style={[globalStyles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS2}</Text>
        <Text style={[globalStyles.test, { color: "#25292e" }]}>{`isLoggedIn: ${isLoggedIn}`}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button label="Anoniem inloggen" onPress={sendPushNotification} theme="primary" />
      </View>
    </View>
  )
}

export default Login
