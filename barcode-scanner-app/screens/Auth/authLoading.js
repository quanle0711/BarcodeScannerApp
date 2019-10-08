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

    //TODO - make async and fetch a real userToken instead of randomly generating token
    checkUserTokenAsync = () => {
        //switch screens based on value of token and unmount the loading screen
        this.props.getUserToken()
        .then(() => {
            console.log("[LOADING] " + this.props.token.token);
            this.props.navigation.navigate(
                this.props.token.token !== undefined ? "App" : "Auth"
            );
        })
        .catch(err => {
            console.log(err)
        });
    };
}

const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthLoadingPage);
