
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Button, Text } from 'native-base';

const ScannedItemCard = (props) => {
    //props: itemFound, clicked, itemName, itemPrice, itemId

    if (props.itemFound) {
        return (
            <Card>
                <CardItem header><Text>Item found!</Text></CardItem>
                <CardItem><Body><Text>{props.itemName}</Text></Body></CardItem>
                <CardItem><Body><Text>Item id : {props.itemId}</Text></Body></CardItem>
                <CardItem><Body><Text>Price before GST: {props.itemPrice}</Text></Body></CardItem>

                <CardItem>
                    <Button rounded onPress={props.clicked}>
                        <Text>
                            Scan another item
                        </Text>
                    </Button>
                </CardItem>
            </Card>
        )
    }
    else {
        return (
            <Card>
                <CardItem header><Text>Item not found...</Text></CardItem>

                <CardItem>
                    <Button rounded onPress={props.clicked}>
                        <Text>
                            Try again
                        </Text>
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

export default ScannedItemCard;