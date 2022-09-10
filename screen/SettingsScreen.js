import React from "react";
import { Text, View, Button , StyleSheet} from "react-native";
import App from "../App";

const Settings = (props) => {
    return (
        <View style={styles.Contain}>
            <Text style={styles.container}></Text>

            <Button
                title="Go to Details"
                color='#fd2e53'
                onPress={() => props.navigation.navigate("Details")}
            />
        </View>
    );
};

export default Settings;
const styles = StyleSheet.create({

    Contain:{
    flex: 1,
        alignItems: "center",
        justifyContent: "center" ,
        backgroundColor:'white'

    },
    container:{
 color: '#fd2e53',
        fontSize: 40 ,

    },



});