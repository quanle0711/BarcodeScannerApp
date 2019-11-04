import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

//navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

//screens
import LoginPage from "./src/screens/Auth/login";
import RegisterPage from "./src/screens/Auth/register";
import AuthLoadingPage from "./src/screens/Auth/authLoading";
import ForgotPasswordPage from "./src/screens/Auth/forgotPassword";
import Home from "./src/screens/Main/mainMenu";
import ScanCamera from "./src/screens/Main/Scan/scanCamera";
import ScanPage from "./src/screens/Main/Scan/scanPage";
import AddPage from "./src/screens/Main/Scan/addPage";
import SingleScanPage from "./src/screens/Main/Scan/singleItemScan";

//Redux

import { Provider } from "react-redux";
import Store from "./src/store";


const ScanStack = createStackNavigator(
    {
        ScanPage: ScanPage,
        SingleScan: SingleScanPage,
        ScanCamera: ScanCamera,
        Add: AddPage,
    },
    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        },
        initialRouteName: "ScanPage"
    }
);

const DrawerStack = createDrawerNavigator(
    {
        Home: Home,
        Scan: { screen: ScanStack },
        
    },
    {
        initialRouteName: "Home"
    });

const AuthStack = createStackNavigator(
    {
        Login: LoginPage,
        Register: RegisterPage,
        ForgotPassword: ForgotPasswordPage
    },
    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        },
        initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingPage,
            App: DrawerStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: "AuthLoading"
        }
    )
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false //loading status of the app
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            ...Ionicons.font
        });
        this.setState({ isReady: true });
    }

    render() {
        let child = <AppContainer />;
        if (!this.state.isReady) {
            child = <AppLoading />;
        }

        return <Provider store={Store}>{child}</Provider>;
    }
}

export default App;
