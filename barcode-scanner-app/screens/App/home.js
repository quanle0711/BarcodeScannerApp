import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Container, Button, Text, H1 } from "native-base";

//redux
import { connect } from "react-redux";
import { removeUserToken } from "../../store/actions/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    button: {
        marginVertical: 10
    }
});

class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <H1 style={styles.text}>Barcode Scanner</H1>
                <Button
                    style={styles.button}
                    rounded
                    onPress={() => {
                        this.props.navigation.navigate("Scan");
                    }}
                >
                    <Text>Scan Item</Text>
                </Button>
                <Button
                    style={styles.button}
                    rounded
                    onPress={() => {
                        this.props.navigation.navigate("Add");
                    }}
                >
                    <Text>Add Item</Text>
                </Button>

                <Button
                    style={styles.button}
                    rounded
                    onPress={() => {
                        this.logOutAsync();
                    }}
                >
                    <Text>Log out</Text>
                </Button>
            </Container>
        );
    }

    logOutAsync = async () => {
        await this.props
            .removeUserToken()
            .then(() => {
                console.log("[logout] " + this.props.token);
                this.props.navigation.navigate("Auth");
            })
            .catch(err => {
                console.log("[logout] " + err);
            });
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
