import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    Platform,
    StatusBar,
    FlatList,
    Dimensions
} from "react-native";
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
import Axios from "axios";

import BigItemCard from "../../../components/UI/Item/MainItemCard";
import ListItemCard from "../../../components/UI/Item/ListItemCard";

const screenWidth = Math.round(Dimensions.get('window').width) / 2;
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
            searchResult: [],
            exactSearch: false,
            buttonActive: false
        };
    }

    searchBarHandler = () => {
        //TODO
        let exactSearch = false;
        Axios.get(
            `http://offinti.com/API/product/read1.php?action=getProduct&item=${this.state.searchField}`
        )
            .then(res => {
                let results = res.data.records;
                //match only 1 product
                if (results.length == 1) {
                    exactSearch = true;
                }

                //match too many products -> slice array
                else if (results.length > 10) {
                    let temp = results.slice(0, 10);
                    results = temp;
                }
                
                this.setState({
                    exactSearch: exactSearch,
                    searchResult: results
                });

                console.log("data returned: ");
                console.log(this.state.searchResult);
            })
            .catch(err => {
                //catch handling
                // if (err.response.status) {
                //     alert("no products found");
                // } else {
                //     console.log(err.response);
                // }
            });
    };

    barcodeScanHandler = () => {
        this.props.navigation.navigate("ScanCamera");
    };

    render() {
        let items = null;

        if (this.state.exactSearch) {
            items = (
                <ScrollView>
                    <BigItemCard />
                </ScrollView>
            );
        } else {
            items = (
                <FlatList
                    data={this.state.searchResult}
                    renderItem={({ item }) => (
                        <ListItemCard
                            image={`https://picsum.photos/${screenWidth}`}
                            name={item.name}
                            id={item.product_id}
                            quantity={item.quantity}
                        />
                    )}
                    numColumns={2}
                    keyExtractor={item => item.product_id}
                />
            );
        }

        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: "#fff" }} searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="ios-arrow-back" />
                        </Button>
                        <Input
                            style={{
                                height: "95%",
                                marginTop: 0,
                                backgroundColor: "#efefef",
                                borderRadius: 5
                            }}
                            placeholder="Search"
                            onChangeText={searchField =>
                                this.setState({ searchField })
                            }
                        />
                        <Button transparent onPress={this.searchBarHandler}>
                            <Icon name="ios-search" />
                        </Button>
                        <Button transparent onPress={this.barcodeScanHandler}>
                            <Icon name="md-camera" />
                        </Button>
                    </Item>
                </Header>

                {items}

                {/**
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
                    direction="left"
                    containerStyle={{}}
                    style={{ backgroundColor: "#5067FF" }}
                    position="bottomRight"
                    onPress={() =>
                        this.setState({
                            buttonActive: !this.state.buttonActive
                        })
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
                 */}
            </Container>
        );
    }
}
