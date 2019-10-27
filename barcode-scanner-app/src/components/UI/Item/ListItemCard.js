import React, { Component } from "react";
import { StyleSheet, Image, View, Dimensions  } from "react-native";
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
const ListItemCard = props => {
    //props: name, quantity, id, 
    //todo: image, price

    const screenWidth = Math.round(Dimensions.get('window').width) / 2;
    return (
        <Card style={{width: '49%',marginHorizontal:'1%',marginVertical:'1%'}}>
            <CardItem cardBody >
                <Image
                    source={{ uri: `${props.image}` }}
                    style={{ height: 180, width: null, flex: 1 }}
                />
            </CardItem>
            <CardItem >
                <Text>{props.name}</Text>
            </CardItem>
            <CardItem  style={{ display: "flex", flexDirection: "row" }}>
                <View style={{flex:1}}>
                    <Text>Product ID: {props.id}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>In Stock: {props.quantity}</Text>
                </View>
            </CardItem>
        </Card>
    );
};

export default ListItemCard;
