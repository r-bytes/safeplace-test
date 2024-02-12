import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "./components"
import usePushNotifications from "./hooks/usePushNotifications"

import { NavigationContainer } from "@react-navigation/native"

import Navigator from "./routes/homeStack"

export default function App() {
  const { sendPushNotification, isLoggedIn } = usePushNotifications()
  const PLACEHOLDER_TITLE = "Welkom"
  const PLACEHOLDER_DETAILS = "Druk op onderstaande knop om door te gaan."
  const PLACEHOLDER_DETAILS2 =
    "Er wordt vervolgens een push notificatie verstuurd die in de app geaccepteerd dient te worden."

  if (isLoggedIn) {
    return <Navigator />
  } else {
    return (
        <View style={[styles.container]}>
          <View>
            <Text style={[styles.title, { color: "#25292e" }]}>{PLACEHOLDER_TITLE}</Text>
          </View>
          <View>
            <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS}</Text>
            <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS2}</Text>
            <Text style={[styles.test, { color: "#25292e" }]}>{`isLoggedIn: ${isLoggedIn}`}</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button label="Anoniem inloggen" onPress={sendPushNotification} theme="primary" />
          </View>
        </View>
    )
  }

  // return !isLoggedIn ? (
  //   // <Navigator />
  //   <NavigationContainer>
  //     <View style={[styles.container]}>
  //       <View>
  //         <Text style={[styles.title, { color: "#25292e" }]}>{PLACEHOLDER_TITLE}</Text>
  //       </View>
  //       <View>
  //         <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS}</Text>
  //         <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS2}</Text>
  //         <Text style={[styles.test, { color: "#25292e" }]}>{`isLoggedIn: ${isLoggedIn}`}</Text>
  //       </View>
  //       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //         <Button label="Anoniem inloggen" onPress={sendPushNotification} theme="primary" />
  //       </View>
  //     </View>
  //   </NavigationContainer>
  // ) : (
  //   <NavigationContainer>
  //     <View style={[styles.container]}>
  //       <View>
  //         <Text style={[styles.title, { color: "#25292e" }]}>{PLACEHOLDER_TITLE}</Text>
  //       </View>
  //       <View>
  //         <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS}</Text>
  //         <Text style={[styles.details, { color: "#25292e" }]}>{PLACEHOLDER_DETAILS2}</Text>
  //         <Text style={[styles.test, { color: "#25292e" }]}>{`isLoggedIn: ${isLoggedIn}`}</Text>
  //       </View>
  //       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //         <Button label="Anoniem inloggen" onPress={sendPushNotification} theme="primary" />
  //       </View>
  //     </View>
  //   </NavigationContainer>
  // )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 200,
    paddingHorizontal: 50,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 50,
    fontSize: 56,
    opacity: 0.6,
    fontWeight: "bold",
  },
  details: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: 16,
  },
  test: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: 16,
    marginTop: 100,
  },
})
