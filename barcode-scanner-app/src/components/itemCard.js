
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Button, Text } from 'native-base';

const styles = StyleSheet.create({
    card: {
        padding:10,
        alignItems:"center",
        justifyContent: "center"
    },
    text: {
    }
})

const ScannedItemCard = (props) => {
    //props: itemFound, clicked, itemName, itemPrice, itemId

    if (props.itemFound) {
        return (
            <Card style={styles.card}>
                <CardItem header><Text>Item found!</Text></CardItem>
                <CardItem cardBody><Text style={styles.text}>{props.itemName}</Text></CardItem>
                <CardItem cardBody><Text style={styles.text}>Item id : {props.itemId}</Text></CardItem>
                <CardItem cardBody><Text style={styles.text}>Price before GST: {props.itemPrice}</Text></CardItem>

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
            <Card >
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