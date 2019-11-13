import React, { Component } from "react";
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Card, CardItem, Text } from "native-base";

const ListItemCard = props => {
    //props: name, quantity, id, image, clicked
    //todo: , price
    const imageURL = `http://offinti.com/image/${props.image}`;
    const screenWidth = Math.round(Dimensions.get("window").width) / 2;
    return (
        <TouchableOpacity
            onPress={props.select}
            style={{
                width: "49%",
                marginHorizontal: "0.5%",
                marginVertical: "0.5%"
            }}
        >
            <Card>
                <CardItem cardBody>
                    <Image
                        source={{ uri: imageURL }}
                        style={{ height: 180, width: null, flex: 1 }}
                        resizeMode="contain"
                    />
                </CardItem>
                <CardItem bordered style={{padding:4}}>
                    <Text numberOfLines={2} ellipsizeMode="tail">
                        {props.name}
                    </Text>
                </CardItem>
                <CardItem bordered style={{padding:4}}>
                    <View style={{ flex: 1 }}>
                        <Text>Product ID: {props.id}</Text>
                    </View>
                </CardItem>
                <CardItem bordered style={{padding:4}}>
                    <View style={{ flex: 1 }}>
                        <Text>In Stock: {props.quantity}</Text>
                    </View>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
};

export default ListItemCard;
