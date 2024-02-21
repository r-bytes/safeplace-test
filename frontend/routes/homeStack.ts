import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { Home, Login, MyComplaint, NewComplaint } from "../screens"

const screens = {
    MyComplaint: {
        screen: MyComplaint
    },
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    NewComplaint: {
        screen: NewComplaint
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)