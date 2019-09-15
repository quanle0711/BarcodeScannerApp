import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        flexDirection: "column",
        justifyContent: "flex-end"
    }
});

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Add page</Text>
            </View>
        )
    }
}

export default Home;