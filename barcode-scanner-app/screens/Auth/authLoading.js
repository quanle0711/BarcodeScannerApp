import React, { Component } from "react";
import { StyleSheet, View,Text } from "react-native";
import {
    ActivityIndicator,
    StatusBar,
  } from 'react-native';


export default class AuthLoadingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
                <Text>Hello world</Text>
            </View>
        );
    }
    componentDidMount() {
        this.props.navigation.navigate('Auth');
        //setTimeout(() => {this.checkUserTokenAsync();}, 1000);
    }

    //TODO - make async and fetch a real userToken instead of randomly generating token
    checkUserTokenAsync = () => {
        //switch screens based on value of token and unmount the loading screen
        let token = Math.random();
        this.props.navigation.navigate(token > 0.5 ? 'App' : 'Auth');
    }
}