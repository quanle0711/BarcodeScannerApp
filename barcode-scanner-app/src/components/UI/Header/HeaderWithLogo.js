import React from "react";
import { Header, Left, Body, Right, Icon, Container } from "native-base";
import { Image, Platform, StatusBar } from "react-native";
import Logo from "../../../../assets/logo/OFFINTI-logo.png";
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";

const HeaderWithLogo = props => {
    return (
            <Header
                style={{
                    backgroundColor: "#fff",
                    ...Platform.select({
                        android: {
                            marginTop: StatusBar.currentHeight
                        }
                    })
                }}
            >
                <Left style={{ flex: 1 }}>
                    <AwesomeButtonBlue
                        type="secondary"
                        height={36}
                        width={36}
                        style={{ marginRight: "2%" }}
                        onPress={() => props.navigation.openDrawer()}
                    >
                        <Icon name="ios-menu" />
                    </AwesomeButtonBlue>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Image
                        style={{ width: "100%" }}
                        source={Logo}
                        resizeMode="contain"
                    />
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
    );
};

export default HeaderWithLogo;
