import React, { Component } from "react";
import {
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    findNodeHandle,
    View,
    Image,
    Dimensions
} from "react-native";
import TextInputState from "react-native/lib/TextInputState";
import { Pages } from "react-native-pages";

import { Form, Item, Input, Label, Button, Text, H1 } from "native-base";
import axios from "axios";
import HeaderWithLogo from "../../../components/UI/Header/HeaderWithLogo";
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import PlaceholderImg from "../../../../assets/placeholder.png";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    h1: {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "400",
        paddingVertical: "10%"
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 12
    },

    imageBtnsWrap: {
        paddingHorizontal: "1%",
        paddingVertical: "3%",
        width: "100%",
        flexDirection: "row"
    },

    imageToUpload: {
        width: null,
        height: screen.height * 0.4,
        borderWidth: 1,
        borderColor: "#444",
    },

    imageBtns: {
        flex: 1,
        marginHorizontal: "1%",
        marginVertical: "1%"
    },

    imageBtnsText: {
        fontSize: 22,
        textAlign:"center",
        color: "#fff",
        fontWeight: "bold"
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
            itemImageURI: null,
            imgUpload: false
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

    focusTextInput = node => {
        try {
            TextInputState.focusTextInput(findNodeHandle(node));
        } catch (e) {
            console.log("Couldn't focus text input: ", e.message);
        }
    };

    onImagePickReturn = async params => {
        await this.setState({ itemImageURI: params, imgUpload: true });
        console.log(params);
    };

    onTakePhotoReturn = async params => {
        await this.setState({ itemImageURI: params, imgUpload: true });
        console.log(params);
    };

    render() {
        let image = (
            <Image
                source={PlaceholderImg}
                style={styles.imageToUpload}
                resizeMode="contain"
            ></Image>
        );
        if (this.state.imgUpload && this.state.itemImageURI != null) {
            image = (
                <Image
                    source={{ uri: this.state.itemImageURI }}
                    style={styles.imageToUpload}
                    resizeMode="contain"
                ></Image>
            );
        }
        return (
            <Pages ref="pages" indicatorColor={"#708090"}>
                <KeyboardAvoidingView
                    style={{
                        ...styles.container,
                        borderRightWidth: 3,
                        borderRightColor: "#C0C0C0"
                    }}
                    behavior="height"
                    enabled
                >
                    <SafeAreaView>
                        <ScrollView keyboardShouldPersistTaps="handled">
                            <HeaderWithLogo
                                navigation={this.props.navigation}
                                backBtn={true}
                            />
                            <H1 style={styles.h1}>Add Item to cupboard</H1>
                            <Form>
                                <Item fixedLabel>
                                    <Label>Item Name</Label>
                                    <Input
                                        onSubmitEditing={() =>
                                            this.focusTextInput(
                                                this.refs.inputB
                                            )
                                        }
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        onChangeText={itemName =>
                                            this.setState({ itemName })
                                        }
                                    />
                                </Item>
                                <Item
                                    fixedLabel
                                    style={{ paddingVertical: "2%" }}
                                >
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
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() =>
                                            this.focusTextInput(
                                                this.refs.inputD
                                            )
                                        }
                                        keyboardType="numeric"
                                        onChangeText={itemPrice =>
                                            this.setState({ itemPrice })
                                        }
                                    />
                                </Item>
                                <Item fixedLabel>
                                    <Label>Item Number</Label>
                                    <Input
                                        ref="inputD"
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() =>
                                            this.focusTextInput(
                                                this.refs.inputE
                                            )
                                        }
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
                                onPress={() => this.refs.pages.scrollToPage(2)}
                            >
                                <Text>Next</Text>
                            </Button>
                        </ScrollView>
                    </SafeAreaView>
                </KeyboardAvoidingView>

                <SafeAreaView>
                    <HeaderWithLogo
                        navigation={this.props.navigation}
                        backBtn={true}
                    />
                    <H1 style={styles.h1}>Add an Image</H1>

                    <View style={styles.imgWrapper}>{image}</View>

                    <View style={styles.imageBtnsWrap}>
                        <AwesomeButtonBlue
                            width={null}
                            stretch={true}
                            style={styles.imageBtns}
                            onPress={() => {
                                this.props.navigation.navigate(
                                    "addImagePicker",
                                    { onReturn: this.onImagePickReturn }
                                );
                            }}
                        >
                            <Text style={styles.imageBtnsText}>
                                Upload an Image
                            </Text>
                        </AwesomeButtonBlue>

                        <AwesomeButtonBlue
                            width={null}
                            stretch={true}
                            style={styles.imageBtns}
                            onPress={() => {
                                this.props.navigation.navigate(
                                    "addImageCamera",
                                    { onReturn: this.onTakePhotoReturn }
                                );
                            }}
                        >
                            <Text style={styles.imageBtnsText}>
                                Take a Photo
                            </Text>
                        </AwesomeButtonBlue>
                        <AwesomeButtonBlue
                            width={null}
                            stretch={true}
                            style={styles.imageBtns}
                        >
                            <Text style={styles.imageBtnsText}>
                                Submit
                            </Text>
                        </AwesomeButtonBlue>
                    </View>
                    
                </SafeAreaView>
            </Pages>
        );
    }
}

export default AddPage;
