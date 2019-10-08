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

export default class RegisterPage extends Component {
    static navigationOptions = {
        title: 'New User',
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
                <H1 style={styles.text}>Register Now!</H1>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            keyboardType="email-address"
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                </Form>
                <Button sucess
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>Sign Up</Text>
                </Button>
            </Container>
        )
    }
}