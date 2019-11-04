import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    Platform,
    StatusBar,
    FlatList,
    View,
    Alert,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions
} from "react-native";

import Modal from "react-native-modalbox";
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";

import { Container, Header, Icon, Item, Input } from "native-base";
import Axios from "axios";

import BigItemCard from "../../../components/UI/Item/MainItemCard";
import ListItemCard from "../../../components/UI/Item/ListItemCard";

//imports
var screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    Modal: {
        height: null,
        width: screen.width * 0.7,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black",
        fontSize: 22,
        textAlign: "center"
    },
    modalTextWrap: {
        padding:'5%'
    },

    modalBtn: {
        flex: 1,
        marginHorizontal: "1%",
        marginVertical: "1%"
    },

    modalBtnWrap: {
        width: "100%",
        flexDirection: "row"
    },
    modalBtnText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold"
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
            renderSingleItem: {}
        };
    }

    searchBarHandler = () => {
        //hide keyboard
        Keyboard.dismiss();
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

                if (typeof results === "undefined") {
                    console.log(res.data.message);
                    this.refs.modal.open();
                }

                //match only 1 product
                else if (results.length == 1) {
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
                //TODO
                console.log(err.response);
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
                <Modal
                    style={styles.Modal}
                    position={"center"}
                    ref={"modal"}
                    entry={"top"}
                >
                    <View style={styles.modalTextWrap}>
                        <Text style={styles.text}>
                            We cound not find this barcode
                        </Text>
                        <Text style={styles.text}>
                            Would you like to add this item manually?
                        </Text>
                    </View>
                    <View style={styles.modalBtnWrap}>
                        <AwesomeButtonBlue
                            width={null}
                            stretch={true}
                            style={styles.modalBtn}
                            onPress={() => this.props.navigation.navigate('Add')}
                        >
                            <Text style={styles.modalBtnText}>Yes</Text>
                        </AwesomeButtonBlue>

                        <AwesomeButtonBlue
                            width={null}
                            stretch={true}
                            style={styles.modalBtn}
                            onPress={() => this.refs.modal.close()}
                        >
                            <Text style={styles.modalBtnText}>No</Text>
                        </AwesomeButtonBlue>
                    </View>
                </Modal>

                <Header style={{ backgroundColor: "#fff" }} searchBar rounded>
                    <Item>
                        <AwesomeButtonBlue
                            type="secondary"
                            height={36}
                            style={{ marginRight: "2%" }}
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="ios-menu" />
                        </AwesomeButtonBlue>
                        <TouchableWithoutFeedback
                            onPress={Keyboard.dismiss}
                            accessible={false}
                        >
                            <Input
                                style={{
                                    height: 36,
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
                        </TouchableWithoutFeedback>

                        <AwesomeButtonBlue
                            type="secondary"
                            height={36}
                            style={{ marginHorizontal: "2%" }}
                            onPress={this.searchBarHandler}
                        >
                            <Icon name="ios-search" />
                        </AwesomeButtonBlue>
                        <AwesomeButtonBlue
                            type="secondary"
                            height={36}
                            style={{ marginRight: "2%" }}
                            onPress={this.barcodeScanHandler}
                        >
                            <Icon name="md-camera" />
                        </AwesomeButtonBlue>
                    </Item>
                </Header>

                {items}
            </Container>
        );
    }
}
