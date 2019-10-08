import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import axios from "axios";
import { BarCodeScanner } from "expo-barcode-scanner";

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Button,
    Text,
    Item
} from "native-base";
import ScannedItemCard from "../../components/itemcard";

const url = "http://9756e40f.ngrok.io";

//STYLING CODE
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    }
});

//FUNCTIONAL CODE
class ScanPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            scanned: false,
            isLoading: false,
            itemFound: false,
            itemName: "",
            itemPrice: "",
            itemId: ""
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
        this.setState({ scanned: true, isLoading:true });

        let itemFound = null;
        let itemName, itemPrice, itemId;
        console.log(`getting... ${url}/products?barcode=${data}`);
        axios
            .get(`${url}/products?barcode=${data}`)
            .then(res => {
                let itemArr = [...res.data];
                if (itemArr.length > 0) {
                    console.log(`found`);
                    itemFound = true;
                    itemName = itemArr[0].ItemName;
                    itemPrice = itemArr[0]["price excl GST"];
                    itemId = itemArr[0].product_id;
                } else {
                    console.log(`notfound`);
                    itemFound = false;
                }
                this.setState({
                    isLoading: false,
                    itemFound: itemFound,
                    itemName: itemName,
                    itemPrice: itemPrice,
                    itemId: itemId
                });
            })
            .catch(rej => {
                console.log(rej.data);
            });
    };

    render() {
        const {
            hasCameraPermission,
            scanned,
            isLoading,
            itemFound,
            itemName,
            itemPrice,
            itemId
        } = this.state;

        if (hasCameraPermission === null) {
            <Container style={styles.container}>
                <Button
                    title={"request permission"}
                    onPress={this.getCameraPermissions}
                />
            </Container>;
        }
        if (hasCameraPermission === false) {
            return (
                <Container style={styles.container}>
                    <Button
                        title={"request permission again"}
                        onPress={this.getCameraPermissions}
                    />
                </Container>
            );
        }

        return (
            <Container style={styles.container}>
                <Text>hello world</Text>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : this.handleBarCodeScan
                    }
                    style={StyleSheet.absoluteFillObject}
                />

                {scanned && isLoading && (
                    <Card>
                        <CardItem header>
                            <Text>loading...</Text>
                        </CardItem>
                    </Card>
                )}

                {scanned && !isLoading && (
                    <ScannedItemCard
                        itemFound={itemFound}
                        itemName={itemName}
                        itemPrice={itemPrice}
                        itemId={itemId}
                        clicked={() => {
                            this.setState({ scanned: false, isLoading:false });
                        }}
                    />
                )}
            </Container>
        );
    }
}

export default ScanPage;
