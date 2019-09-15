import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, Button, Text, H1 } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        alignItems:"center",
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    button: {
        marginVertical: 10,
    }
});

class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <H1 style={styles.text}>Barcode Scanner</H1>
                <Button style={styles.button}
                    rounded
                    onPress={() => {
                        this.props.navigation.navigate("Scan");
                    }}
                >
                    <Text>Scan Item</Text>
                </Button>
                <Button style={styles.button}
                    rounded
                    onPress={() => {
                        this.props.navigation.navigate("Add");
                    }}
                >
                    <Text>Add Item</Text>
                </Button>
            </Container>
        );
    }
}

export default Home;
