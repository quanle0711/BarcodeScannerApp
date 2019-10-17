import React, { Component } from "react";
import { Stylesheet, View } from "react-native";
import { Container, Content, Button, Text, H1, Form } from "native-base";

//imports


const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default class scanPage extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <Container>
                <Form>

                </Form>
            </Container>
        );
    }
}
