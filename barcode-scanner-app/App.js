import React, { Component } from "react";
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';

//navigation
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./components/home";
import ScanPage from "./components/scanpage";
import AddPage from "./components/addpage";


const RootStack = createStackNavigator({
  HomeP:{screen:Home},
  Scan:{screen:ScanPage},
  Add:{screen:AddPage}
})

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isReady: false, //loading status of the app
    }
  }

  async componentDidMount () {
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
    return <AppContainer/>;
  }
}

export default App;
