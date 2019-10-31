import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    Platform,
    StatusBar,
    FlatList,
    Dimensions
} from "react-native";

import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';

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
import Axios from "axios";

import BigItemCard from "../../../components/UI/Item/MainItemCard";
import ListItemCard from "../../../components/UI/Item/ListItemCard";

//imports

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
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
            buttonActive: false,
            renderSingleItem: {}
        };
    }

    searchBarHandler = () => {
        //TODO
        let exactSearch = false;
        console.log(
            "--------------searchfield: " +
                this.state.searchField +
                "-----------------------"
        );
        Axios.get(
            `http://offinti.com/API/product/read1.php?action=getProduct&item=${this.state.searchField}`
        )
            .then(res => {
                let results = res.data.records;
                //match only 1 product
                if (results.length == 1) {
                    this.exactSearchHandler(results[0]);
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
        this.props.navigation.navigate("ScanCamera", {
            onReturn: this.onScanReturn
        });
    };

    onScanReturn = async params => {
        await this.setState({ searchField: params });
        this.searchBarHandler();
    };

    exactSearchHandler = item => {
        this.setState({ exactSearch: true, renderSingleItem: { ...item } });
    };

    itemPressHandler = item => {
        this.props.navigation.navigate("SingleScan", {
            item: item
        });
    };

    render() {
        let items = null;
        if (this.state.exactSearch) {
            items = (
                <ScrollView>
                    <BigItemCard
                        image={this.state.renderSingleItem.image}
                        ean={this.state.renderSingleItem.ean}
                        price={this.state.renderSingleItem.price}
                        name={this.state.renderSingleItem.name}
                        id={this.state.renderSingleItem.product_id}
                        quantity={this.state.renderSingleItem.quantity}
                    />
                </ScrollView>
            );
        } else {
            items = (
                <FlatList
                    data={this.state.searchResult}
                    renderItem={({ item }) => (
                        <ListItemCard
                            select={() => this.itemPressHandler(item)}
                            image={item.image}
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
                        <AwesomeButtonBlue
                            type="secondary"
                            height={40}
                            style={{ marginRight: "2%" }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="ios-arrow-back" />
                        </AwesomeButtonBlue>
                        <Input
                            style={{
                                height: "95%",
                                marginTop: 0,
                                backgroundColor: "#efefef",
                                borderRadius: 5
                            }}
                            placeholder="Search"
                            value={this.state.searchField}
                            onChangeText={searchField =>
                                this.setState({ searchField })
                            }
                        />
                        <AwesomeButtonBlue
                            type="secondary"
                            height={40}
                            style={{ marginHorizontal: "2%" }}
                            onPress={this.searchBarHandler}
                        >
                            <Icon name="ios-search" />
                        </AwesomeButtonBlue>
                        <AwesomeButtonBlue
                            type="secondary"
                            height={40}
                            style={{ marginRight: "2%" }}
                            onPress={this.barcodeScanHandler}
                        >
                            <Icon name="md-camera" />
                        </AwesomeButtonBlue>
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
