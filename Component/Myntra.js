import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Card} from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
import React,{useState} from "react";
import CustomeAlert from "./CustomeAlert";

export default function App({press}) {
    const [Show,setShow] = useState(false);
    const [Visible,setVisible] = useState(false);

    const[isModalVisible, setModalVisible ] = useState(false);
    const [chooseData, setchooseData] = useState ();
    const changeModalVisible = (bool) => {
        setModalVisible(bool)
    };

    const setData = (data) => {
        setchooseData(data);
    }

    const [fontsLoaded]=useFonts({
        'MyriadProBold': require('../assets/font/MyriadProBold.ttf'),
        'MyriadProCond': require('../assets/font/MyriadProCond.ttf')

    });
    if (!fontsLoaded) {
        return  <AppLoading/>;
    }


    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../assets/image/myntra.png')}/>
                    <Text style={styles.title}>Myntra</Text>
                    <Text style={styles.Subtext}>Up to 2.67% Crypto Cashback</Text>
                    <StatusBar style="auto"/>

                    <View style={styles.innerContainer}>
                        <Text style={styles.innerText}>About Myntra</Text>
                        <Text style={styles.innertext}>Shop Online for Branded Shoes, Clothing &
                            Accessories in india @ Myntra.com

                            <TouchableOpacity onPress={() => setShow(!Show)}>
                                {!Show && <Text style={styles.bold}> See all</Text>}
                                {Show && <Text style={styles.bold}> See less</Text>}
                            </TouchableOpacity>

                            <View>
                                {Show ? <Text style={styles.boldText}>India's Largest Fashion Portal.</Text> : null}
                            </View>

                        </Text>
                    </View>

                    <Card style={styles.innerContainer2}>
                        <TouchableOpacity
                            onPress={() => changeModalVisible(true)}>

                            <View style={styles.three}>
                                <View style={styles.OneContainer}>
                                    <Entypo name="untag" size={24} color="black"/>
                                </View>
                                <View style={styles.TwoContainer}>
                                    <Text style={styles.innertext1}>Coupon code not eligible</Text>
                                </View>
                                <View style={styles.ThreeContainer}>
                                    <Ionicons name="information-circle-outline" size={24} color='#c8c8c8'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Modal
                            transparent= {true}
                            animationType = 'fade'
                            visible={isModalVisible}
                            nRequestClose={() =>changeModalVisible(true)}
                        >
                            <CustomeAlert
                                changeModalVisible={changeModalVisible}
                                setData={setData}
                            />
                        </Modal>


                        <Text style={styles.border}></Text>


                        <TouchableOpacity onPress={() => setVisible(!Visible)}>
                            <View style={styles.three}>
                                <View style={styles.FourContainer}>
                                    <Ionicons name="alert-circle-outline" size={24} color="black"/>
                                </View>
                                <View style={styles.FifthContainer}>
                                    <Text style={styles.innertext2}>Exclusions Apply </Text>
                                </View>
                                {!Visible && (
                                    <View>
                                        <Ionicons name="chevron-forward" size={20} color="#c8c8c8"/>
                                    </View>
                                )}
                                {Visible && (
                                    <View>
                                        <Ionicons name="chevron-down" size={20} color="#c8c8c8"/>

                                    </View>
                                )}

                                {/*<View>*/}
                                {/*    <Ionicons name="chevron-forward" size={20} color="#c8c8c8"/>*/}
                                {/*</View>*/}
                            </View>
                            <View>
                                {Visible ? <Text style={styles.Paragraph}>
                                    {'\n'}
                                    {'\n'}
                                    <Text style={styles.Number}> 532% - </Text>   New Customers{'\n'}
                                    <Text style={styles.Number}> 2.67% - </Text>  Returning Customers{'\n'}
                                    {'\n'}
                                    {'\n'}
                                    Does NOT APPLY to the following products/categories/brands:
                                    {'\n'}
                                    {'\n'}
                                    - Cash on Delivery (COD) payment option is not eligible for Crypto Cash-back
                                    {'\n'}
                                    {'\n'}
                                    - Maximum 3 orders per JP Address/Per Email ID & Phone Number/Shipping Address in a calendar month.
                                    {'\n'}
                                    {'\n'}
                                    - Bulk orders are not permitted:{'\n'} Please note it is against policy to use Myntra for non-personal or commercial use.
                                    We may block all such accounts and forfeit their Cashback
                                    balances without any prior notice.
                                    {'\n'}
                                    {'\n'}
                                </Text> : null}
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>
            </ScrollView>

            {/*<TouchableOpacity style={styles.innerContainer3}>*/}
            {/*    <View style={styles.TextView}>*/}
            {/*        <Text style={styles.container3text}>Sign up and Shop at Myntra</Text>*/}
            {/*    </View>*/}

            {/*    <View>*/}
            {/*        <Ionicons*/}
            {/*            name="md-arrow-forward-sharp"*/}
            {/*            size={24}*/}
            {/*            color="white"/>*/}
            {/*    </View>*/}

            {/*</TouchableOpacity>*/}

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    title:{
        marginTop:12,
        fontSize:22,
        fontFamily:'MyriadProBold',

    },

    Subtext:{
        color:'#fd2e53',
        marginTop:10,
        fontSize:18,
        fontFamily:'MyriadProBold',


    },
    image:{
        width:100,
        height:100,
        borderRadius:120/2,
        borderWidth:1,
        borderColor:'#ccc',
        marginTop:25,
    },
    innerContainer:{
        backgroundColor: 'white',
        borderColor:'#ccc',
        padding:20,
        borderRadius:30,
        elevation:4,
        shadowColor:'black',
        marginTop:30,
        width:'90%',

    },
    innerText:{
        // fontWeight:'bold',
        fontSize:20,
        fontFamily:'MyriadProBold',


    },
    innertext:{
        fontSize:15,
        marginTop:8,
        fontFamily:'MyriadProBold',
        // color:'#413f3f',
    },
    bold:{
        fontFamily:'MyriadProBold',
        fontSize:18,
        marginLeft:8,
    },
    boldText:{
        fontFamily:'MyriadProBold',
        fontSize:15,
        marginTop:5,
    },


    innerContainer2:{
        backgroundColor: 'white',
        borderColor:'#ccc',
        padding:20,
        width:'90%',
        borderRadius:30,
        elevation:4,
        shadowColor:'black',
        margin:30,
        flex:2,
        fontFamily:'MyriadProBold',


    },
    three:{
        flexDirection:'row',
    },
    OneContainer:{

        flex:0.1,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#dcd1d1',
        padding:5,
        alignItems:'center',
        fontFamily:'MyriadProBold',


    },
    TwoContainer:{

        flex:0.8,
        padding:7,
        marginLeft:4,


    },
    ThreeContainer:{

        flex:0.1,
        padding:7,
    },
    FourContainer:{
        flex:0.1,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#dcd1d1',
        padding:5,
        alignItems:'center',
        fontFamily:'MyriadProBold',
        marginRight:4,

    },
    FifthContainer:{
        flex:0.85,
        marginLeft:6,
    },

    rightsideimage:{
        height:25,
        width:25,
        opacity:0.50,
        marginLeft:70,
    },
    leftsideimage1:{
        height:35,
        width:35,
        marginRight:10,
        borderWidth:1,
        borderColor:'#e1dfdf',
        borderRadius:5,
        fontFamily:'MyriadProBold',

    },
    innertext1:{
        fontSize:15,
        // marginTop:6,
        fontFamily:'MyriadProBold',

    },
    innertext2:{
        fontSize:15,
        marginTop:6,
        fontFamily:'MyriadProBold',

    },
    leftsideimage2:{
        height:35,
        width:35,
        marginRight:10,
        borderWidth:1,
        borderColor:'#e1dfdf',
        borderRadius:5,
    },
    border:{
        borderColor:'#c8c8c8',
        borderBottomWidth:1,
        marginBottom:18,
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
    Paragraph:{
        fontFamily:'MyriadProCond',
        fontSize:17,
        fontWeight:'normal',
    },
    Number:{
        fontSize:17,
        fontFamily:'MyriadProBold',
    }


});
