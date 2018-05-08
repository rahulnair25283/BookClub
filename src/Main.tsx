import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import firebase from "react-native-firebase";

const Main = () => {
    const create = () => {};

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    firebase
                        .database()
                        .ref("BookClub")
                        .push({
                            id: 1,
                            name: "test",
                            status: "active",
                        })
                }
            >
                <Text>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Join</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        top: "150@ms0.6",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
    },
    welcome: {
        fontSize: "20@ms0.6",
        textAlign: "center",
        margin: "10@ms0.6",
    },
    button: {
        width: "200@ms0.6",
        borderWidth: 1,
        borderColor: "#333333",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10@ms0.6",
    },
});
