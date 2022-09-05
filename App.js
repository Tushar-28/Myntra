import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,Alert} from 'react-native';
import {Card} from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
      <ScrollView>
      <View style={styles.container}>
       <Image style={styles.image} source={require('./assets/image/myntra.png')}/>
          <Text style={styles.title}>Myntra</Text>
          <Text style={styles.Subtext}>Up to 2.67% Crypto Cashback</Text>
          <StatusBar style="auto"/>

          <View style={styles.innerContainer}>
        <Text style={styles.innerText}>About Myntra</Text>
            <Text style={styles.innertext}>Shop Online for Branded Shoes, Clothing &
            Accessories in india @ Myntra.com,India's Largest Fashion Portal.</Text>
        </View>


          <Card style={styles.innerContainer2}>
              <TouchableOpacity  onPress={ () => Alert.alert( "No Coupons allowed",'Myntra coupons are not compatible with StromX Crypto Cashback yet')}>

          <View style={styles.three}>
              <View style={styles.OneContainer}>
              <Entypo name="untag" size={24} color="black" />
             </View>
              <View style={styles.TwoContainer}>
              <Text style={styles.innertext1}>Coupon code not eligible</Text>
              </View>
              <View style={styles.ThreeContainer}>
              <Ionicons name="information-circle-outline" size={24} color='#c8c8c8' />
              </View>
          </View>
              </TouchableOpacity>

              <Text style={styles.border}></Text>

             <TouchableOpacity>
              <View style={styles.three}>
                  <View style={styles.FourContainer}>
                  <Ionicons name="alert-circle-outline" size={20} color="black" />
                  </View>
                  <View style={styles.FifthContainer}>
                  <Text style={styles.innertext2}>Exclusions Apply </Text>
                  </View>
                  <View>
                      <Ionicons name="chevron-forward" size={20} color="#c8c8c8" />
                  </View>

          </View>
             </TouchableOpacity>
          </Card>


      </View>

<TouchableOpacity>
          <View style={styles.innerContainer3}>

              <View style={styles.TextView}>
              <Text style={styles.container3text}>Sign up and Shop at Myntra</Text>
              </View>

              <View style={styles.Arrow}>
              <Ionicons
                  name="md-arrow-forward-sharp"
                  size={24}
                  color="white"/>
              </View>

          </View>
</TouchableOpacity>

      </ScrollView>
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
    fontWeight:'bold',

  },

  Subtext:{
    color:'#fd2e53',
     marginTop:10,
    fontSize:18,
    fontWeight:'bold',


  },
  image:{
    width:100,
    height:100,
    borderRadius:120/2,
    borderWidth:2,
    borderColor:'#ccc',
    marginTop:100,
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
      fontWeight:'bold',
       fontSize:20,

   },
    innertext:{
        fontSize:15,
        marginTop:8,


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
    },
    innertext1:{
        fontSize:15,
        // marginTop:6,
    },
    innertext2:{
        fontSize:15,
        marginTop:6,
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
          padding:13,
        borderRadius:30,
        borderWidth:1,
          margin:20,
         alignItems: 'center',
          marginTop:'35%',
         flexDirection:'row',
        overflow:'hidden',

    },
    TextView:{
      flex:1,
       alignItems:'center',
    },
    container3text:{
      color:'white',
        fontSize:14,
        fontWeight:'bold',


    },
    Arrow:{
     flex:0.1,
    },
    Block:{
      borderRadius:10,

    },

});
