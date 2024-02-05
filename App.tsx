import { ExpoPushToken } from "expo-notifications"
import { Button, Text, View } from "react-native"
import usePushNotifications from "./hooks/usePushNotifications"

export default function App() {
  const { expoPushToken, notification, sendPushNotification } = usePushNotifications()
  console.log(expoPushToken)
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Your expo push token: {expoPushToken?.data}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken.data)
        }}
      />
    </View>
  )
}
