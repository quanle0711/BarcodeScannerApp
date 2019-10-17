import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Button, Text, H1 } from "native-base";

//redux
import { connect } from "react-redux";
import { removeUserToken } from "../../store/actions/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    buttonContainer: {marginTop:'30%'},
    button: {
        marginHorizontal: 10,
        marginTop: 6,
        justifyContent: "center"
    }
});

class Home extends Component {
    static navigationOptions = {
        title: "Barcode Scanner"
    };

    render() {
        return (
            <Container style={styles.container}>
                <H1 style={styles.text}>Main Menu</H1>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("Scan");
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
                </View>
            </Container>
        );
    }

    logOutAsync = async () => {
        await this.props
            .removeUserToken()
            .then(() => {
                this.props.navigation.navigate("Auth");
            })
            .catch(err => {});
    };
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
)(Home);
