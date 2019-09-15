import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import axios from "axios";
import { BarCodeScanner } from 'expo-barcode-scanner';


let url = "192.168.1.7";

//STYLING CODE
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        flexDirection: "column",
        justifyContent: "center",
    }
});

//FUNCTIONAL CODE
class ScanPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            scanned: false
        };
    }

    async componentDidMount() {
        this.getCameraPermissions();
    }

    getCameraPermissions = async () => {
        const { status }  = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    };

    handleBarCodeScan = ({ type, data }) => {
        console.log(`getting... ${url}/products `)
        axios.get(`http://localhost:3000/products`)
        .then(res => {console.log(res.data)})
        .catch(rej => {console.log(rej.data)})
        this.setState({ scanned: true });
    };

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            <View style={styles.container}>
              <Button
                        title={"request permission"}
                        onPress={this.getCameraPermissions}
                    />
            </View>
        }
        if (hasCameraPermission === false) {
            return (
            <View style={styles.container}>
              <Button
                        title={"request permission again"}
                        onPress={this.getCameraPermissions}
                    />
            </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text>hello world</Text>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : this.handleBarCodeScan
                    }
                    style={StyleSheet.absoluteFillObject}
                />

                {scanned && (
                    <Button
                        title={"Tap to Scan Again"}
                        onPress={() => this.setState({ scanned: false })}
                    />
                )}
            </View>
        );
    }
}

export default ScanPage;