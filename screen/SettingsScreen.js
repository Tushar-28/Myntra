import React from "react";
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from "react-native";
import App from "../App";
import {Ionicons} from "@expo/vector-icons";

const Settings = (props) => {
    return (
        <View style={styles.Contain}>
            <Image style={styles.Background} source={require('../assets/image/Logos.png')}/>
            {/*<Button*/}
            {/*    title="Go to Details"*/}
            {/*    color='#fd2e53'*/}
            {/*    onPress={() => props.navigation.navigate("Details")}*/}
            {/*/>*/}
            <TouchableOpacity onPress={() => props.navigation.navigate("Details")} style={styles.innerContainer3}>

                {/*props.navigation.navigate("Sign_Up", { username: input })} style={styles.innerContainer3}>*/}
                <View style={styles.TextView}>
                    <Text style={styles.container3text}>Continue with email</Text>
                </View>


                <View>
                    <Ionicons
                        name="md-arrow-forward-sharp"
                        size={24}
                        color="#fd2e53"/>
                </View>


            </TouchableOpacity>
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
    Background:{
        width:'100%',
        height:'70%',
    },
    innerContainer3:{
        backgroundColor: '#ffffff',
        borderColor:'#fd2e53',
        padding:12,
        borderRadius:30,
        borderWidth:1.5,
         margin:40,

        alignItems: 'center',
        flexDirection:'row',

    },
    TextView:{
         flex:1,
        alignItems:'center',

    },
    container3text:{
        color:'#fd2e53',
        fontSize:17,
        fontFamily:'MyriadProBold',
    },




});