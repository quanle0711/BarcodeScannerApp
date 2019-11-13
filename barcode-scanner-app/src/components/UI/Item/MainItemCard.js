import React, { Component } from "react";
import {
    StyleSheet,
    ImageBackground,
    View,
    Animated,
    Dimensions,
    Text
} from "react-native";
import ProductStatusBar from "../productStatusBar/productStatusBar";

const screen = Dimensions.get("window");

import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import RNPickerSelect from "react-native-picker-select";
import NumericInput from 'react-native-numeric-input';

const styles = StyleSheet.create({
    image: {
        height: screen.height * 0.5,
        width: "100%"
    },
    buttons: {
        flexDirection: "row",
        justifyContent:'center',
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    nameSegment: {
        borderBottomWidth: 1
    },

    extraInfo1: {
        flexDirection: "row",
        borderBottomWidth: 1
    }
});
const MainItemCard = props => {
    //props:image, name, price, quantity, ean, id

    return (
        <View>
            <ImageBackground
                source={{
                    uri: `http://offinti.com/image/${props.image}`
                }}
                resizeMode="contain"
                style={styles.image}
            />
            <ProductStatusBar />
            <View>
                <View>
                    <RNPickerSelect
                        onValueChange={value => console.log(value)}
                        style={{ flex: 3, paddingRight: 30 }}
                        placeholder={{ label: "Add to...", value: null }}
                        items={[
                            { label: "VPS", value: "VPS" },
                            { label: "Tender", value: "Tender" },
                            {
                                label: "Purchase Order",
                                value: "Purchase Order"
                            },
                            {
                                label: "Goods Received",
                                value: "Goods Received"
                            },
                            { label: "Goods Returned", value: "Goods Returned" }
                        ]}
                        useNativeAndroidPickerStyle={true}
                    />
                </View>
                <View style={styles.buttons}>
                    <AwesomeButtonBlue
                        type="primary"
                        width={null}
                        stretch={true}
                        style={{
                            flex: 1,
                            marginHorizontal: "1%",
                            marginVertical: "1%"
                        }}
                    >
                        <Text style={{ color: "#fff" }}>Add</Text>
                    </AwesomeButtonBlue>
                    <NumericInput 
                    rounded={true}
                    minValue={0}
                    totalHeight={50}
                    containerStyle={{marginTop:6,marginBottom:6, marginRight:'1%'}}
                    totalWidth={screen.width * 0.49}
                    onChange={value => console.log(value)} />
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
