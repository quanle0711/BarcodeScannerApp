import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, Dimensions, Platform, StatusBar } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Header, Button, Item, Icon, Left, Body, Right } from "native-base";

const ScreenHeight = Math.round(Dimensions.get('window').height);
const parallaxHeaderHeight = ScreenHeight * 0.6;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
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
                contentBackgroundColor="lightgrey"
                parallaxHeaderHeight={parallaxHeaderHeight}
                renderForeground={() => (
                    <View style={styles.header}>
                        <Header >
                            <Left>
                                <Button

                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Icon name="ios-arrow-back" />
                                </Button>
                            </Left>
                            <Body></Body>
                            <Right></Right>
                        </Header>
                    </View>
                )}
                renderBackground={() => (
                    <ImageBackground source={{ uri: `http://offinti.com/image/${item.image}` }}
                        resizeMode="contain"
                        style={{ height: parallaxHeaderHeight }}>

                    </ImageBackground>
                )}
            >
                <View style={{ height: 500 }}>
                    <Text>Scroll me</Text>
                </View>
            </ParallaxScrollView>

        );
    }
}