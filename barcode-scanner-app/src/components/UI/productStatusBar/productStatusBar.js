import React, {Component} from 'react';
import {StyleSheet, View, Dimesions, Platform} from 'react-native';
import {Button, Text} from 'native-base';
import reducer from '../../../store/reducers/auth';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:'100%',
    },
    badgeStyle: {
        position:'absolute',
        top:-4,
        right:-4,
        paddingHorizontal:0,
        paddingVertical:0,
        fontSize:4,
        backgroundColor:'red',
        borderRadius:9
    }
})
const productStatusBar = props => {
    return (
        <View style={styles.container}>
            <Button style={{flex:1}}>
                <Text>V</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            
            <Button style={{flex:1}}>
                <Text>T</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            <Button style={{flex:1}}>
                <Text>P</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            <Button style={{flex:1}}>
                <Text>GR</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            <Button style={{flex:1}}>
                <Text>I</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            <Button style={{flex:1}}>
                <Text>GR</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
            <Button style={{flex:1}}>
                <Text>C</Text>
                <View style={styles.badgeStyle}><Text>2</Text></View>
            </Button>
        </View>
    );
}

export default productStatusBar;