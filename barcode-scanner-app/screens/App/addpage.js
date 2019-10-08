import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";

import {
    Container,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    H1
} from "native-base";
import axios from "axios";

const url = "http://9756e40f.ngrok.io";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        textAlign: "center",
        padding: 32
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 12
    }
});

class AddPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: "",
            itemPrice: "",
            itemId: "",
            itemNumber: "",
            itemBarcode: ""
        };
    }

    buttonHandler = () => {
        this.basicInputValidationHandler();
    };

    basicInputValidationHandler = () => {
        const {
            itemName,
            itemPrice,
            itemId,
            itemNumber,
            itemBarcode
        } = this.state;
        const priceRegex = new RegExp('^\d+(.\d{0,2})?$');

        if (itemId.length != 6) {
            Alert.alert(
                "Oops",
                "the item's Product ID value must be of 6 digits",
                [{ text: "okay", onPress: () => {} }]
            );
        } else if (itemNumber.length != 6) {
            Alert.alert("Oops", "the item's number value must be of 6 digits", [
                { text: "okay", onPress: () => {} }
            ]);
        } else if (itemBarcode.length != 13) {
            Alert.alert("Oops", "the item's Barcode must have 13 digits", [
                { text: "okay", onPress: () => {} }
            ]);
        } else {
            this.submitInputs();
        }
    };

    submitInputs = () => {
        console.log('posting')
        axios
            .post(`${url}/products`, {
                "id" : this.state.itemId,
                "product_id": this.state.itemId,
                "Itemnumber": this.state.itemNumber,
                "ItemName": this.state.itemName,
                "barcode": this.state.itemBarcode,
                "price excl GST": this.state.itemPrice
            })
            .then(res => {
                Alert.alert("Hooray!", "your submission is successful", [
                    { text: "okay", onPress: () => {} }
                ]);
            })
            .catch(err => {
                Alert.alert("Submission failed", err, [
                    { text: "try again", onPress: () => {} }
                ]);
            });
    };

    render() {
        return (
            <Container>
                <H1 style={styles.h1}>Add Item</H1>
                <Form>
                    <Item fixedLabel>
                        <Label>Item Name</Label>
                        <Input
                            onChangeText={itemName =>
                                this.setState({ itemName })}
                        />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Price</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={itemPrice =>
                                this.setState({ itemPrice })
                            }
                        />
                    </Item>
                    <Item fixedLabel>
                        <Label>Product ID</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={itemId => this.setState({ itemId })}
                        />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Number</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={itemNumber =>
                                this.setState({ itemNumber })
                            }
                        />
                    </Item>
                    <Item fixedLabel>
                        <Label>Item Barcode</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={itemBarcode =>
                                this.setState({ itemBarcode })
                            }
                        />
                    </Item>
                </Form>

                <Button
                    style={styles.button}
                    rounded
                    full
                    onPress={this.buttonHandler}
                >
                    <Text>Submit</Text>
                </Button>
            </Container>
        );
    }
}

export default AddPage;
