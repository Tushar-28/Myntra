import React, { useState } from "react";
import {View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import App from "../Component/Myntra";
const Home = (props) => {
    const [input, setInput] = useState("");
    return (


        <View style={styles.Button}>
            <ScrollView>
            <App/>
            </ScrollView>



    <TouchableOpacity onPress={() =>

                props.navigation.navigate("Sign_Up", { username: input })} style={styles.innerContainer3}>
                <View style={styles.TextView}>
                    <Text style={styles.container3text}>Sign up and Shop at Myntra</Text>
                </View>


                <View>
                    <Ionicons
                        name="md-arrow-forward-sharp"
                        size={24}
                        color="white"/>
                </View>


            </TouchableOpacity>
          </View>


    );
};

export default Home;
const styles = StyleSheet.create({
    Button:{
        flex:1,
        backgroundColor:'white'
    },


    innerContainer3:{
        backgroundColor: '#fd2e53',
        borderColor:'#ccc',
        padding:12,
        borderRadius:30,
        borderWidth:1,
        margin:20,
        alignItems: 'center',
        flexDirection:'row',

    },
    TextView:{
        flex:1,
        alignItems:'center',

    },
    container3text:{
        color:'white',
        fontSize:17,
        fontFamily:'MyriadProBold',
    },
});