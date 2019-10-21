import React, { Component } from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import {
    Container,
    Content,
    Button,
    Header,
    Text,
    Fab,
    Icon,
    ListItem,
    Item,
    Left,
    Body,
    Right,
    List,
    Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
//imports

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    test1: {
        backgroundColor: "red",
        height: 400
    },
    test2: {
        backgroundColor: "green",
        height: 900
    }
});

export default class scanPage extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            searchField: "",
            buttonActive: false
        };
    }

    searchBarHandler = () => {
        //TODO
        console.log("logging" + this.state.searchField);
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="ios-arrow-back" />
                        </Button>
                        <Input
                            placeholder="Search"
                            onChangeText={searchField =>
                                this.setState({ searchField })
                            }
                        />
                        <Button transparent onPress={this.searchBarHandler}>
                            <Icon name="ios-search" />
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Col style={styles.test1}></Col>
                            <Col style={styles.test2}></Col>
                        </Row>
                    </Grid>
                    
                </Content>
                <Fab
                        active={this.state.buttonActive}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: "#5067FF" }}
                        position="bottomRight"
                        onPress={() =>
                            this.setState({ buttonActive: !this.state.buttonActive })
                        }
                    >
                        <Icon name="share" />
                        <Button style={{ backgroundColor: "#34A34F" }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: "#3B5998" }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: "#DD5144" }}>
                            <Icon name="mail" />
                        </Button>
                    </Fab>
            </Container>
        );
    }
}
