import React, { Component } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, AsyncStorage, StatusBar } from "react-native";

import { connect } from "react-redux";
import { getUserToken } from "../../store/actions/actions";

class AuthLoadingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Text>Hello world</Text>
            </View>
        );
    }
    componentDidMount() {
        this.checkUserTokenAsync();
    }

    componentDidUpdate() {
        console.log("token???: " + this.props.token);
        this.props.navigation.navigate(
            this.props.token != null ? "App" : "Auth"
        );
    }

    checkUserTokenAsync = async () => {
        //switch screens based on value of token and unmount the loading screen
         this.props.getUserToken()
        
    };
}

const mapStateToProps = (state) => {
    console.log("logging state: " + state.auth.authLoaded);
    return {
        token: state.auth.token,
        authLoaded: state.auth.authLoaded,
    };
}

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthLoadingPage);
