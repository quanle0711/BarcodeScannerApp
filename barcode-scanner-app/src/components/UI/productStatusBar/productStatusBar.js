import React, { Component } from "react";
import { StyleSheet, View, Dimesions, Platform } from "react-native";
import { Text } from "native-base";
import reducer from "../../../store/reducers/auth";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor:'#222'

    },
    infoItem: {
        flex: 1,
        height: 32,
        marginHorizontal:'1%',
        backgroundColor: "#555",
        alignItems:'center',
        justifyContent:'center',
        opacity:0.9,
    },
    badgeStyle: {
        position: "absolute",
        top: -4,
        right: -4,
        paddingHorizontal: 0,
        paddingVertical: 0,
        width:16,
        height:16,
        backgroundColor: "red",
        borderRadius: 8
    },
    badgeText: {
        color:'#fff',
        textAlign:'center',
        fontSize:12
    },
    infoText: {
        color:'#fff',
        alignSelf : "center",
        textAlign:'center',
    }
});
const productStatusBar = props => {
    return (
        <View style={styles.container}>
            <View style={styles.infoItem}>
                <Text style={styles.infoText}>V</Text>

                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>

            <View style={styles.infoItem}>
                <Text style={styles.infoText}>T</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoText}>P</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
                <Text style={{...styles.infoText, color:'green'}}>GR</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoText}>I</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
                <Text style={{...styles.infoText, color:'red'}}>GR</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoText}>C</Text>
                <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
        </View>
    );
};

export default productStatusBar;
