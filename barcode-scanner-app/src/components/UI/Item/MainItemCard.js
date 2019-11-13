import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Animated, Dimensions,Text } from "react-native";
import {
    Card,
    CardItem,
} from "native-base";
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import ProductStatusBar from "../productStatusBar/productStatusBar";
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    image: {
        height: ScreenHeight * 0.5,
        width: '100%',
    },
    buttons: {
        borderBottomWidth: 1
    },
    nameSegment: {
        borderBottomWidth: 1
    },

    extraInfo1: {
        flexDirection: "row",
        borderBottomWidth: 1
    }
})
const MainItemCard = props => {
    //props:image, name, price, quantity, ean, id

    return (
        <View>
            <ImageBackground
                source={{
                    uri: `http://offinti.com/image/${props.image}`
                }}
                resizeMode="contain"
                style={styles.image} />
            <ProductStatusBar />
            <View>
                <View style={styles.buttons}>
                    
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        style={{flex:3, paddingRight:30}}
                        placeholder={{label: "Add to...", value: null}}
                        items={[
                            { label: 'VPS', value: 'VPS' },
                            { label: 'Tender', value: 'Tender'},
                            { label: 'Purchase Order', value: 'Purchase Order' },
                            { label: 'Goods Received', value: 'Goods Received'},
                            { label: 'Goods Returned', value: 'Goods Returned' },
                        ]}
                        useNativeAndroidPickerStyle={true}
                    />

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
                        {props.name}
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
                        ${Number(props.price).toFixed(2)}NZD
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
                        In Stock: {props.quantity}
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
                        EAN: {props.ean}
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
                        Product ID: {props.product_id}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default MainItemCard;
