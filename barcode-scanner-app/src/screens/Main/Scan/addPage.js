import React, { Component } from "react";
import { StyleSheet, Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, findNodeHandle, View, Animated } from "react-native";
import TextInputState from 'react-native/lib/TextInputState';
import { Pages } from 'react-native-pages';

import {
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    H1,
} from "native-base";
import axios from "axios";
import HeaderWithLogo from "../../../components/UI/Header/HeaderWithLogo";

const url = "http://9756e40f.ngrok.io";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: 'black'
    },
    h1: {
        textAlign: "center",
        textTransform: 'uppercase',
        fontWeight: '400',
        paddingVertical: '10%',

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
            itemNumber: "",
            itemBarcode: "",
            itemLongDesc: "",
        };
    }

    buttonHandler = () => {
        this.basicInputValidationHandler();
    };

    basicInputValidationHandler = () => {
        const {
            itemName,
            itemPrice,
            itemLongDesc,
            itemNumber,
            itemBarcode
        } = this.state;
        const priceRegex = new RegExp("^d+(.d{0,2})?$");

        //TODO when validation needs to be checked
        // if (itemNumber.length != 6) {
        //     Alert.alert("Oops", "the item's number value must be of 6 digits", [
        //         { text: "okay", onPress: () => { } }
        //     ]);
        // } else if (itemBarcode.length != 13) {
        //     Alert.alert("Oops", "the item's Barcode must have 13 digits", [
        //         { text: "okay", onPress: () => { } }
        //     ]);
        // } else {
        //     this.submitInputs();
        // }

        this.submitInputs();
    };

    submitInputs = () => {
        //TODO when Aubrey gives API end point
    };

    focusTextInput = (node) => {
        try {
            TextInputState.focusTextInput(findNodeHandle(node))
        } catch (e) {
            console.log("Couldn't focus text input: ", e.message)
        }
    }

    render() {
        return (
            <Pages indicatorColor={"#708090"}>
                <Animated.View>

                    <KeyboardAvoidingView style={styles.container} behavior="height" enabled >
                        <SafeAreaView>
                            <ScrollView keyboardShouldPersistTaps='handled'>
                                <HeaderWithLogo navigation={this.props.navigation} backBtn={true} />
                                <H1 style={styles.h1}>Add Item to cupboard</H1>
                                <Form>
                                    <Item fixedLabel>
                                        <Label>Item Name</Label>
                                        <Input
                                            onSubmitEditing={() => this.focusTextInput(this.refs.inputB)} returnKeyType={"next"} blurOnSubmit={false}
                                            onChangeText={itemName =>
                                                this.setState({ itemName })
                                            }
                                        />
                                    </Item>
                                    <Item fixedLabel style={{ paddingVertical: '2%' }}>
                                        <Label>Long Description</Label>
                                        <Input
                                            ref="inputB"
                                            multiline={true}

                                            onChangeText={itemLongDesc =>
                                                this.setState({ itemLongDesc })
                                            }
                                        />
                                    </Item>
                                    <Item fixedLabel>
                                        <Label>Item Price</Label>
                                        <Input
                                            returnKeyType={"next"} blurOnSubmit={false}
                                            onSubmitEditing={() => this.focusTextInput(this.refs.inputD)}
                                            keyboardType="numeric"
                                            onChangeText={itemPrice =>
                                                this.setState({ itemPrice })
                                            }
                                        />
                                    </Item>
                                    <Item fixedLabel>
                                        <Label>Item Number</Label>
                                        <Input
                                            ref="inputD" returnKeyType={"next"} blurOnSubmit={false}
                                            onSubmitEditing={() => this.focusTextInput(this.refs.inputE)}
                                            keyboardType="numeric"
                                            onChangeText={itemNumber =>
                                                this.setState({ itemNumber })
                                            }
                                        />
                                    </Item>
                                    <Item fixedLabel>
                                        <Label>Item Barcode</Label>
                                        <Input
                                            ref="inputE"
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
                                    <Text>Next</Text>
                                </Button>
                            </ScrollView>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </Animated.View>
                <Animated.View >
                    <HeaderWithLogo navigation={this.props.navigation} backBtn={true} />
                    <Text>Page 2</Text>
                </Animated.View>
            </Pages>
        );
    }
}

export default AddPage;
