import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
    button: {
        marginHorizontal: 10,
        marginVertical: 10
    }
});

class LoginPage extends Component {
    static navigationOptions = {
        title: "please sign in"
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
                <H1 style={styles.text}>Welcome!</H1>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            keyboardType="email-address"
                            onChangeText={emailField =>
                                this.setState({ emailField })
                            }
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                </Form>

                <Button style={styles.button} onPress={this.loginAsync}>
                    <Text>Log in</Text>
                </Button>
                <Button
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
            </Container>
        );
    }

    loginAsync = () => {
        this.props.setUserToken(this.state.emailField)
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
