import * as React from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default class AddImagePicker extends React.Component {
    state = {
        image: null
    };

    render() {

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
        } else {
            await this._pickImage();
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.props.navigation.state.params.onReturn(result.uri);
        }

        this.props.navigation.goBack();
    };
}
