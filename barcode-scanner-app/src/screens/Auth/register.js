import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Platform,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Content,
    Button,
    Text,
    H1,
    Form,
    Item,
    Input,
    Label
} from "native-base";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        textAlign: "center"
    },
    button: {
        marginHorizontal: 10,
        marginTop: 6,
        justifyContent: "center"
    }
});

export default class RegisterPage extends Component {
    static navigationOptions = {
        //header: null
    };

    constructor(props) {
        super(props);
    }

    buttonHandler = () => {
        this.props.navigation.navigate("App");
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
                enabled
            >
                <Content contentContainerStyle={styles.content}>
                    <H1 style={styles.text}>Register Now</H1>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input keyboardType="email-address" />
                        </Item>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input />
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
                    <Button
                        sucess
                        style={styles.button}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}
