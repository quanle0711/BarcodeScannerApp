import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Container, Form, Item, Input, Label, Button, Text, H1 } from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    h1: {
        textAlign:'center',
        padding:32
    }
});

class Home extends Component {
    render() {
        return (
            <Container>
                <H1 style={styles.h1}>Add Item</H1>
                <Form>
                    <Item fixedLabel>
                        <Label>Item Name</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Price</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item ID</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Number</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Barcode</Label>
                        <Input />
                    </Item>
                </Form>
            </Container>
        )
    }
}

export default Home;