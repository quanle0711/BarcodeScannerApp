import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
    Container,
    Button,
    Text,
    H1,
    Form,
    Item,
    Input,
    Label
} from "native-base";

import Logo from "../../../assets/logo/OFFINTI-logo.png";
//redux

import { connect } from "react-redux";
import { setUserToken } from "../../store/actions/actions";

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
        marginVertical:'1.5%',
        justifyContent: 'center'
    }
});

class LoginPage extends Component {
    static navigationOptions = {
        title: "Please Sign In"
    };

    constructor(props) {
        super(props);
        this.state = {
            emailField: ""
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
            <Container style={styles.container}>
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
                        <Input secureTextEntry={true} placeholder="Password" />
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
            </Container>
        );
    }

    loginAsync = () => {
        this.props
            .setUserToken(this.state.emailField)
            .then(() => {
                this.props.navigation.navigate("App");
            })
            .catch(err => {
                console.log(err);
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
