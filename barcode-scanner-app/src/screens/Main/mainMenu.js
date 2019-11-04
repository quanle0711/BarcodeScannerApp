import React, { Component } from "react";
import { StyleSheet, View, Image, Platform, StatusBar } from "react-native";
import { Container, Button, Text, H1, Content } from "native-base";

//redux
import { connect } from "react-redux";
import { removeUserToken } from "../../store/actions/actions";

//local UI
import Logo from '../../../assets/logo/OFFINTI-logo.png';
import HeaderLogo from '../../components/UI/Header/HeaderWithLogo'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    buttonContainer: { marginTop: '30%' },
    button: {
        marginHorizontal: 10,
        marginTop: 6,
        justifyContent: "center"
    }
});

class Home extends Component {
    //Navigation
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container style={styles.container}>
                <HeaderLogo navigation={this.props.navigation}/>
                <Content contentContainerStyle={styles.content}>

                    <Button
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("ScanPage");
                        }}
                    >
                        <Text>Scan Item</Text>
                    </Button>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("Add");
                        }}
                    >
                        <Text>Add Item</Text>
                    </Button>

                    <Button
                        danger
                        style={styles.button}
                        onPress={() => {
                            this.logOutAsync();
                        }}
                    >
                        <Text>Log out</Text>
                    </Button>
                </Content>

            </Container>
        );
    }


    logOutAsync = async () => {
        await this.props
            .removeUserToken()
            .then(() => {
                this.props.navigation.navigate("Auth");
            })
            .catch(err => { });
    };
}


//redux
const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
