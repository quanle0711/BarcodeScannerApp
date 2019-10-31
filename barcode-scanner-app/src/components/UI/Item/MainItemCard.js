import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableNativeFeedback, Dimensions } from "react-native";
import {
    Card,
    CardItem,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from "native-base";
const ScreenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    buttonSection: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
        height: ScreenHeight * 0.1,
        display: "flex",
        flexDirection: "row"
    },
    button: {
        paddingHorizontal: "2%",
        paddingVertical: "5%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    height: "90%",
}
})
const MainItemCard = props => {
    //props:image, name, price, quantity, ean, id

    return (
        <Card>
            <CardItem cardBody bordered>
                <Image
                    source={{ uri: `http://offinti.com/image/${props.image}` }} //to change
                    style={{ height: ScreenHeight * 0.6, width: null, flex: 1 }}
                    resizeMode="contain"
                />
            </CardItem>


            <CardItem bordered style={styles.buttonSection}>
                <TouchableNativeFeedback onPress={this._onPressButton}

                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={{ ...styles.button, backgroundColor: '#5cb85c' }}>
                        <Text>Add to Cupboard</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}

                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={{ ...styles.button, backgroundColor: '#0275d8' }}>
                        <Text >Add to Purchase Order</Text>
                    </View>
                </TouchableNativeFeedback>
            </CardItem>
            <CardItem bordered>
                <Text>{props.name}</Text>
            </CardItem>
            <CardItem bordered style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>Current Price: ${props.price}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Quantity: {props.quantity}</Text>
                </View>
            </CardItem>
            <CardItem bordered style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>EAN: {props.ean}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Product ID : {props.id}</Text>
                </View>
            </CardItem>

        </Card>
    );
};

export default MainItemCard;
