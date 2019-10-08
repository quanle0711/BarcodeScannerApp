import React, { Component } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import LoginPage from "./screens/Auth/login";
import RegisterPage from "./screens/Auth/register";
import AuthLoadingPage from "./screens/Auth/authLoading";
import Home from "./screens/App/home";
import ScanPage from "./screens/App/scanpage";
import AddPage from "./screens/App/addpage";

//Redux provider

import { Provider } from 'react-redux'; 
import Store from "./store";

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
    let child = <AppContainer/>
    if (!this.state.isReady) {
      child = <AppLoading />;
    }

    return (
      <Provider store={Store}>
        {child}
      </Provider>
    );
  }
}

export default App;
