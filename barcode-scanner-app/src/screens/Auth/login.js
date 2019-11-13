import React, { Component } from "react";
import { StyleSheet, View, Image, Alert, ScrollView } from "react-native";
import { Container, Button, Text, Form, Item, Input } from "native-base";

import Logo from "../../../assets/logo/OFFINTI-logo.png";
//redux

import { connect } from "react-redux";
import { setUserToken } from "../../store/actions/actions";
import Axios from "axios";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        textAlign: "center"
    },
    formContainer: {
        width: "80%",
        marginHorizontal: "10%",
        justifyContent: "center"
    },
    button: {
        marginHorizontal: "10%",
        marginVertical: "1.5%",
        justifyContent: "center"
    }
});

class LoginPage extends Component {
    static navigationOptions = {
        title: "Please Sign In"
    };

    constructor(props) {
        super(props);
        this.state = {
            emailField: "",
            passwordField: ""
        };
    }

    registerButtonHandler = () => {
        this.props.navigation.navigate("Register");
    };

    forgotPasswordButtonHandler = () => {
        this.props.navigation.navigate("ForgotPassword");
    };
    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.container}
            >
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: "80%" }}
                        source={Logo}
                        resizeMode="contain"
                    />
                </View>
                <Form style={styles.formContainer}>
                    <Item
                        rounded
                        style={{
                            marginLeft: 0,
                            marginVertical: "1.5%",
                            paddingHorizontal: 0
                        }}
                    >
                        <Input
                            keyboardType="email-address"
                            placeholder="E-mail address"
                            onChangeText={emailField =>
                                this.setState({ emailField })
                            }
                        />
                    </Item>
                    <Item
                        rounded
                        style={{
                            marginLeft: 0,
                            marginVertical: "1.5%",
                            paddingHorizontal: 0
                        }}
                    >
                        <Input
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={passwordField =>
                                this.setState({ passwordField })
                            }
                        />
                    </Item>
                </Form>
                <View style={styles.buttonContainer}>
                    <Button
                        rounded
                        style={styles.button}
                        onPress={this.loginAsync}
                    >
                        <Text>Log in</Text>
                    </Button>
                    <Button
                        rounded
                        info
                        style={styles.button}
                        onPress={this.registerButtonHandler}
                    >
                        <Text>Register</Text>
                    </Button>
                    <Button
                        transparent
                        style={styles.button}
                        onPress={this.forgotPasswordButtonHandler}
                    >
                        <Text>I forgot my password</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }

    loginAsync = () => {
        const { emailField, passwordField } = this.state;

        Axios.get("http://offinti.com/API/customer/read.php", {
            params: {
                email: emailField,
                password: passwordField
            }
        })
            .then(res => {
                if (typeof res.data.records != "undefined") {
                    //a record is found
                    this.props
                        .setUserToken(emailField)
                        .then(() => {
                            this.props.navigation.navigate("App");
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    //nothing is returned
                    Alert.alert(
                        "Account not found",
                        "Either this account does not exist or your credentials are invalid",
                        [
                            {
                                text: "Try again"
                            }
                            //more buttons go here
                        ],
                        { cancelable: false }
                    );
                }
            })
            .catch(err => {
                //todo
            });
    };
}

const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    setUserToken: value => dispatch(setUserToken(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
