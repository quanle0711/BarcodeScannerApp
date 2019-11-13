import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Header, Body, Icon } from 'native-base';
import { DrawerItems } from "react-navigation-drawer";



//redux
import { connect } from "react-redux";
import { removeUserToken } from "../../../store/actions/actions";

const styles = StyleSheet.create({
    container: {},
    header: { backgroundColor: '#C0C0C0', height: 150 },
})

const screen = Dimensions.get('window');

class SideDrawer extends Component {


    logOutAsync = async () => {
        await this.props
            .removeUserToken()
            .then(() => {
                this.props.navigation.navigate("Auth");
            })
            .catch(err => { });
    };


    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Image
                            style={{
                                height: 150, width: "90%"
                            }}
                            source={require('../../../../assets/logo/OFFINTI-logo.png')}
                            resizeMode='contain'
                        />
                    </Body>
                </Header>
                <Content contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <DrawerItems {...this.props} />
                    <TouchableOpacity onPress={() => {
                        this.logOutAsync();
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={{
                                marginHorizontal: 16,
                                width: 24,
                                alignItems: 'center',
                            }}>
                                <Icon style={{ fontSize: 24, color: '#d9534f' }} name='logout' type='SimpleLineIcons' />
                            </View>
                            <Text style={{
                                margin: 16,
                                color: '#d9534f',

                            }}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDrawer);