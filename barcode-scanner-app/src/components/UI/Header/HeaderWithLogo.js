import React from "react";
import { Header, Left, Body, Right } from 'native-base';
import { Image,Platform,StatusBar } from 'react-native';
import Logo from '../../../../assets/logo/OFFINTI-logo.png';

const HeaderWithLogo = (props) => {
    return (
        <Header noLeft style={{
            backgroundColor: '#fff', ...Platform.select({
                android: {
                    marginTop: StatusBar.currentHeight
                }
            })
        }}>
            <Left>
            </Left>
            <Body>
                <Image
                    style={{ width: '100%', marginTop: 8 }}
                    source={Logo}
                    resizeMode='contain'
                />

            </Body>
            <Right></Right>
        </Header>
    )
}

export default HeaderWithLogo;