import React from "react"
import usePushNotifications from "./hooks/usePushNotifications"

import Navigator from "./routes/homeStack"
import { Login } from "./screens"

export default function App() {
  const { isLoggedIn } = usePushNotifications()

  return isLoggedIn ? (
    // Show my complaint screen
    <Navigator />
  ) : (
    // Show login screen
    <Login />
  )
}
