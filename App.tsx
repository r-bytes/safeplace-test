import * as Notifications from "expo-notifications"
import React, { useEffect, useRef } from "react"
import { Alert, Button, View } from "react-native"

export default function App() {
  // const { expoPushToken, notification, sendPushNotification } = usePushNotifications()
  // console.log(expoPushToken)

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       alignItems: "center",
  //       justifyContent: "space-around",
  //     }}
  //   >
  //     <Text>Your expo push token: {expoPushToken?.data}</Text>
  //     <View style={{ alignItems: "center", justifyContent: "center" }}>
  //       <Text>Title: {notification && notification.request.content.title} </Text>
  //       <Text>Body: {notification && notification.request.content.body}</Text>
  //       <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
  //     </View>
  //     <Button
  //       title="Press to Send Notification"
  //       onPress={async () => {
  //         await sendPushNotification(expoPushToken.data)
  //       }}
  //     />
  //   </View>
  // )
  const notificationListener = useRef<ReturnType<typeof Notifications.addNotificationReceivedListener>>()
  const responseListener = useRef<ReturnType<typeof Notifications.addNotificationResponseReceivedListener>>()

  useEffect(() => {
    // Set up the notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    })

    // Register for push notifications
    registerForPushNotificationsAsync().then((token) => {
      console.log(`Expo Push Token: ${token}`)
    })

    // Set up the notification listeners
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log("Notification received: ", notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification response: ", response)
      // Simulate a modal with Accept and Reject buttons
      Alert.alert(
        "Notification Response",
        "Would you like to accept or reject?",
        [
          { text: "Accept", onPress: () => console.log("Accept Pressed"), style: "cancel" },
          { text: "Reject", onPress: () => console.log("Reject Pressed") },
        ],
        { cancelable: false }
      )
    })

    // Clean up the listeners on unmount
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [])

  // Function to register for push notifications
  async function registerForPushNotificationsAsync(): Promise<string | undefined> {
    let token

    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!")
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
    return token
  }

  // Function to send a push notification
  async function sendPushNotification(): Promise<void> {
    await Notifications.presentNotificationAsync({
      title: "Press to send notification",
      body: "Press the button to send a notification.",
      badge: 1,
    })
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Press to send notification" onPress={sendPushNotification} />
    </View>
  )
}
