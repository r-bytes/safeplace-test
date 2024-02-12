import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { Home, Login, MyComplaint, NewComplaint } from "../screens"

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    MyComplaint: {
        screen: MyComplaint
    },
    NewComplaint: {
        screen: NewComplaint
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)