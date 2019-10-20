import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
    Container,
    Button,
    Text,
    H1,
    Form,
    Item,
    Input,
    Label,
    Icon 
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
    formContainer: {
        width: "96%"
    },
    buttonContainer: {
        marginTop: 14,
    },
    button: {
        marginHorizontal: 10,
        marginTop: 6,
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
                <Form style={styles.formContainer}>
                    <Item floatingLabel success>
                        <Label>Email</Label>
                        <Input
                            keyboardType="email-address"
                            onChangeText={emailField =>
                                this.setState({ emailField })
                            }
                        />
                    </Item>
                    <Item floatingLabel error>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                        
                    </Item>
                </Form>
                <View style={styles.buttonContainer}>
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
