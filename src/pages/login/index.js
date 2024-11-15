
import React, { useState } from "react";
import { themas } from "../../global/themas";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    StyleSheet,
    Dimensions
} from 'react-native';

//import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';




export default function Login(){
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false)
        
    return(
   <View style={styles.container}>
    <View style={styles.boxTop}>
       
        <Text style={styles.text}>LOGIN</Text>
    </View>
    <View style={styles.boxMid}>
    <Text style={styles.titleInput}>Email</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
         value={email}
         onChangeText={setEmail}
        />
        <MaterialIcons
        name='email'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    <Text style={styles.titleInput}>Senha</Text>
    <View style={styles.boxInput}>      
        <TextInput
         style={styles.input}
         value={password}
         onChangeText={setPassword}
         secureTextEntry
        />
        <MaterialIcons
        name='remove-red-eye'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    </View>
    <View style={styles.boxBottom}>
    <TouchableOpacity 
    style={styles.button}
    onPress={()=>{navigation.navigate('Home')}}
    >
        {
            loading?
            <ActivityIndicator color={'#FFFF'} size={"small"}/>
            :
            <Text style={styles.textButton}>SEGUIR</Text>
        }
            </TouchableOpacity>
            </View>
            <View>
          <TouchableOpacity
           style={styles.buttonRegister}
           onPress={()=>
            navigation.navigate('cadastro')
        }
           >

    <Text style={styles.textBottom}>Ainda não tem conta? <Text style={{color:themas.colors.primary, fontWeight:'bold'}}>Registre-se</Text></Text>
    </TouchableOpacity>
   </View>
        <View style={styles.rodalogin}>
        <Image 
            source={require('../../assests/img/rodalogin1.png')}
            
            resizeMode="contain"
            />
            </View>
           
   </View>
)
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#002233'
    },
    boxTop:{
        height:Dimensions.get('window').height/7,
        width:'100%',
        //backgroundColor:'#002233',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor:'#002233',
        paddingHorizontal:30
    },
    boxBottom:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor:'',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    rodalogin:{
        height:100,
        width: 160,
        marginTop: 545,
        position: "absolute",
        top: 1,
        right: 200
       //width:,
        //height:Dimensions.get('window').height/17,
        
    },
    text:{
        fontWeight:'bold',
        color:'#FFFF',
        marginTop:40,
        fontSize:24,

    },
    titleInput:{
        marginLeft:3,
        color:themas.colors.gray,
        marginTop:20,
        fontSize:16
    },
    boxInput:{
       width:'100%',
       height:35,
       borderWidth:1,
       borderRadius:7,
       marginTop:10,
       flexDirection:'row',
       alignItems:'center',
      paddingHorizontal:5,
      backgroundColor:themas.colors.gray,
      borderColor:themas.colors.gray
    },
    input:{
        height:'100%',
        width:'92%',
        //borderWidth:1,
        //backgroundColor:'red',
        borderRadius:20,
        paddingLeft:10
    },
    button:{
        width:240,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:7,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        marginTop:10,
        height:20,
        fontSize:12,
        color:themas.colors.gray
    }
})
