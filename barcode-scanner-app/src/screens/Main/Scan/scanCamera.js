import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

import {
    Container,
    Card,
    CardItem,
    Button,
    Text,
} from "native-base";

const url = "http://9756e40f.ngrok.io";

//STYLING CODE
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        //flexDirection: "column",
        justifyContent: "center"
    },
    scanner: {
        ...StyleSheet.absoluteFillObject,
         width:'100%',
        // height:'100%',
    }
});

//FUNCTIONAL CODE
class ScanCamera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            scanned: false,
            isLoading: false,
        };
    }

    async componentDidMount() {
        this.getCameraPermissions();
    }

    getCameraPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    };

    handleBarCodeScan = ({ type, data }) => {
        this.setState({ scanned: true });
        this.props.navigation.goBack();
        this.props.navigation.state.params.onReturn(data);
    };

    render() {

        if (this.state.hasCameraPermission === null) {
            return (
                <Container style={styles.container}>
                    <Button
                    onPress={this.getCameraPermissions}>
                        <Text>Request Permission</Text>
                    </Button>
                </Container>
            )
        }
        if (this.state.hasCameraPermission === false) {
            return (
                <Container style={styles.container}>
                    <Button
                    onPress={this.getCameraPermissions}>
                        <Text>No Access to Camera, Try again</Text>
                    </Button>
                </Container>
            );
        }

        return (
            <Container style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={
                        //this.state.scanned ? undefined : this.handleBarCodeScan
                        this.handleBarCodeScan
                    }
                    style={styles.scanner}
                />

                {
                //------------CHECK LATER
                //     this.state.scanned && this.state.isLoading && (
                //     <Card>
                //         <CardItem header>
                //             <Text>loading...</Text>
                //         </CardItem>
                //     </Card>
                // )}

                // {this.state.scanned && !this.state.isLoading && (
                //     <Button
                //         onPress={() => {
                //             this.setState({ scanned: false, isLoading: false });
                //         }}
                //     >
                //         <Text>Scan again</Text>
                //     </Button>
                // )
                }
            </Container>
        );
    }
}

export default ScanCamera;
