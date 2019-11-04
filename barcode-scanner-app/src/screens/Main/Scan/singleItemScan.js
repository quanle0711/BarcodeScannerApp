import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Dimensions,
    Platform,
    StatusBar
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import { Header, Button, Item, Icon, Left, Body, Right } from "native-base";

const ScreenHeight = Math.round(Dimensions.get("window").height);
const ScreenWidth = Math.round(Dimensions.get("window").width);
const parallaxHeaderHeight = ScreenHeight * 0.6;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    buttons: {
        flexDirection: "row",
        flex: 1,
        borderBottomWidth: 1
    },
    nameSegment: {
        borderBottomWidth: 1
    },

    extraInfo1: {
        flexDirection:"row",
        borderBottomWidth: 1
    }
});

export default class SingleScanPage extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {

        
        const item = this.props.navigation.state.params.item;
        return (
            <ParallaxScrollView
                backgroundColor="white"
                contentBackgroundColor="#e5e5ea"
                parallaxHeaderHeight={parallaxHeaderHeight}
                renderFixedHeader={() => (
                    <View style={styles.header}>
                        <AwesomeButtonBlue
                            type="secondary"
                            height={40}
                            width={40}
                            style={{ marginHorizontal: "3%", marginTop: "3%" }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="ios-arrow-back" />
                        </AwesomeButtonBlue>
                    </View>
                )}
                renderBackground={() => (
                    <ImageBackground
                        source={{
                            uri: `http://offinti.com/image/${item.image}`
                        }}
                        resizeMode="contain"
                        style={{ height: parallaxHeaderHeight }}
                    ></ImageBackground>
                )}
            >
                <View style={{ height: 400 }}>
                    <View style={styles.buttons}>
                        <AwesomeButtonBlue
                            type="primary"
                            width={ScreenWidth * 0.48}
                            style={{
                                marginHorizontal: "1%",
                                marginVertical: "1%"
                            }}
                        >
                            <Text style={{ color: "#fff" }}>Add to VPS</Text>
                        </AwesomeButtonBlue>
                        <AwesomeButtonBlue
                            type="secondary"
                            width={ScreenWidth * 0.48}
                            style={{
                                marginHorizontal: "1%",
                                marginVertical: "1%"
                            }}
                        >
                            <Text style={{ color: "#444" }}>
                                Add to Purchase
                            </Text>
                        </AwesomeButtonBlue>
                    </View>
                    <View style={styles.nameSegment}>
                        <Text
                            style={{
                                color: "#444",
                                fontSize: 24,
                                fontWeight: "700",
                                textAlign: "center",
                                paddingHorizontal: "2%"
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.extraInfo1}>
                        <Text
                            style={{
                                flex: 1,
                                color: "#444",
                                fontSize: 20,
                                fontWeight: "300",
                                textAlign: "center",
                                paddingHorizontal: "2%"
                            }}
                        >
                            ${Number(item.price).toFixed(2)}NZD
                        </Text>
                        <Text
                            style={{
                                flex: 1,
                                color: "#444",
                                fontSize: 20,
                                fontWeight: "300",
                                textAlign: "center",
                                paddingHorizontal: "4%"
                            }}
                        >
                            In Stock: {item.quantity}
                        </Text>
                    </View>
                    <View style={styles.extraInfo1}>
                    <Text
                            style={{
                                flex: 1,
                                color: "#444",
                                fontSize: 20,
                                fontWeight: "300",
                                textAlign: "center",
                                paddingHorizontal: "2%"
                            }}
                        >
                            EAN: {item.ean}
                        </Text>
                        <Text
                            style={{
                                flex: 1,
                                color: "#444",
                                fontSize: 20,
                                fontWeight: "300",
                                textAlign: "center",
                                paddingHorizontal: "4%"
                            }}
                        >
                            Product ID: {item.product_id}
                        </Text>
                    </View>
                </View>
            </ParallaxScrollView>
        );
    }
}
