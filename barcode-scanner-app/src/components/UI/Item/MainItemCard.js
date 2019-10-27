import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
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
const MainItemCard = props => {
    //props:

    return (
        <Card>
            <CardItem cardBody bordered>
                <Image
                    source={{ uri: "https://baconmockup.com/640/360" }} //to change
                    style={{ height: 360, width: null, flex: 1 }}
                />
            </CardItem>
            <CardItem bordered>
                <Text>BOOKS and PENS A4</Text>
            </CardItem>
            <CardItem bordered style={{ display: "flex", flexDirection: "row" }}>
                <View style={{flex:1}}>
                    <Text>Current Price: $69.99</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Quantity: 5</Text>
                </View>
            </CardItem>
            <CardItem bordered style={{ display: "flex", flexDirection: "row" }}>
                <View style={{flex:1}}>
                    <Text>EAN: 0000000000</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Product ID : 555555</Text>
                </View>
            </CardItem>

            <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Icon active name="ios-add" />
              <Text>Add to Cupboard</Text>
            </CardItem>
        </Card>
    );
};

export default MainItemCard;
