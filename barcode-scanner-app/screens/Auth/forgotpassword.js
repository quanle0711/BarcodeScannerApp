import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
    Container, Header, Content, Button, Text, H1,H3, Form, Item, Input, Label,
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

export default class ForgotPasswordPage extends Component {
    static navigationOptions = {
        title: 'Forgotten password',
    }

    constructor(props) {
        super(props);
    }

    buttonHandler = () => {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <Container style={styles.container}>
                <H1 style={styles.text}>Forgotten your password?</H1>
                <H3 style={styles.text}>Enter your email address and we will send out an email to reset your password! </H3>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            keyboardType="email-address"
                        />
                    </Item>
                
                </Form>
                <Button sucess
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>Reset Password</Text>
                </Button>
            </Container>
        )
    }
}