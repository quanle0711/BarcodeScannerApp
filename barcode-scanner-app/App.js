import React, { Component } from "react";
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';

//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import Home from "./screens/App/home";
import LoginPage from "./screens/Auth/login";
import RegisterPage from "./screens/Auth/register";
import ScanPage from "./screens/App/scanpage";
import AddPage from "./screens/App/addpage";
import AuthLoadingPage from "./screens/Auth/authLoading";

const AppStack = createStackNavigator(
  {
    Home: Home,
    Scan: ScanPage,
    Add: AddPage
  },
  {
    initialRouteName: 'Home',
  })

const AuthStack = createStackNavigator(
  {
    Login: LoginPage,
    Register: RegisterPage,
    //ForgotPassword: ForgotPasswordPage
  }
  , {
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading : AuthLoadingPage,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName : 'AuthLoading',
    }
  )
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false, //loading status of the app
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <AppContainer />;
  }
}

export default App;
