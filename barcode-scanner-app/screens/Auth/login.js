import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
    Container, Header, Content, Button, Text, H1, Form, Item, Input, Label,
} from "native-base";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
    text: {
        textAlign:"center",
    },
    button: {
        marginHorizontal:10,
        marginVertical :10,
    }
});

export default class LoginPage extends Component {
    static navigationOptions = {
        title: 'please sign in',
    }

    constructor(props) {
        super(props);
    }

    buttonHandler = () => {
        this.props.navigation.navigate('App');
    }

    registerButtonHandler = () => {
        this.props.navigation.navigate('Register');
    }
    render() {
        return (
            <Container style={styles.container}>
                <H1 style={styles.text}>Welcome!</H1>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            keyboardType="email-address"
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                </Form>

                <Button
                    style={styles.button}
                    onPress={this.buttonHandler}
                >
                    <Text>Log in</Text>
                </Button>
                <Button info
                    style={styles.button}
                    onPress={this.registerButtonHandler}
                >
                    <Text>Register</Text>
                </Button>
                <Button transparent
                    style={styles.button}
                    onPress={this.buttonHandler}
                >
                    <Text>I forgot my password</Text>
                </Button>
            </Container>
        )
    }
}