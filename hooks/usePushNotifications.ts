import { useEffect, useRef, useState } from "react"
import { Alert } from "react-native"

import * as Notifications from "expo-notifications"

export type PushNotificationState = {
  sendPushNotification(): Promise<void>
  isLoggedIn: boolean
}

const usePushNotifications = (): PushNotificationState => {
  const notificationListener = useRef<ReturnType<typeof Notifications.addNotificationReceivedListener | null>>(null)
  const responseListener = useRef<ReturnType<typeof Notifications.addNotificationResponseReceivedListener | null>>(null)

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

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
      // Show a modal with Accept and Reject buttons
      Alert.alert(
        "Notification Response",
        "Would you like to accept or reject?",
        [
          {
            text: "Accept",
            onPress: () => {
              console.log("Accept Pressed")
              setIsLoggedIn(true)
            },
            style: "cancel",
          },
          {
            text: "Reject",
            onPress: () => {
              console.log("Reject Pressed")
              setIsLoggedIn(false)
            },
          },
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
    let token: string

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

  // Todo: Let sendPushNotification function post to endpoint
  // Use function below to simulate Push Notification, or use Expo's Push Notification Tool from: https://expo.dev/notifications
  // async function sendPushNotification2(expoPushToken: string) {
  //   const message = {
  //     to: expoPushToken,
  //     sound: "default",
  //     title: "Original Title",
  //     body: "And here is the body!",
  //     data: { random: Math.random() },
  //     _category: "message"
  //   }

  //   await fetch("https://exp.host/--/api/v2/push/send", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Accept-encoding": "gzip, deflate",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   })
  // }

  // Function to send a push notification
  async function sendPushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Press to send notification",
        body: "Press the button to send a notification.",
      },
      trigger: null, // Trigger immediately
    })
  }

  return {
    sendPushNotification,
    isLoggedIn,
  }
}

export default usePushNotifications
