import React, { useState } from "react";
import { themas } from "../../global/themas";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
   Dimensions 
} from 'react-native';
//import Logo from '../../assets/img/logouni.png'
import {MaterialIcons} from '@expo/vector-icons';
export default function Cadastro(){
    return(
   <View style={styles.container}>
    <View style={styles.boxTop}>
       
        <Text style={styles.text}>CADASTRO</Text>
    </View>
    <View style={styles.boxMid}>
    <Text style={styles.titleInput}>Email</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
        />
        <MaterialIcons
        name='email'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    <Text style={styles.titleInput}>CPF</Text>
    <View style={styles.boxInput}>      
        <TextInput
         style={styles.input}
        />
        <MaterialIcons
        name='key'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    <Text style={styles.titleInput}>Contato</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
         secureTextEntry
        />
        <MaterialIcons
        name='phone'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    <Text style={styles.titleInput}>Senha</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
        />
        <MaterialIcons
        name='remove-red-eye'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    </View>
    <View style={styles.boxBottom}>
    <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>SEGUIR</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.rodacadastro}>
        <Image 
            source={require('../../assests/img/rodacadastro1.png')}
            
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
        //justifyContent:'center',
        backgroundColor:'#002233',
        
    },
    boxTop:{
        height:Dimensions.get('window').height/6,
        width:'100%',
        //backgroundColor:'#000000',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    boxMid:{
        height:Dimensions.get('window').height/2,
        width:'100%',
        //backgroundColor:'#000000',
        paddingHorizontal:30,
        paddingVertical:5,
        
        
    },
    boxBottom:{
        height:Dimensions.get('window').height/5,
        width:'100%',
        //backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end'
        
    },
    rodacadastro:{
       width:'100%',
        height:Dimensions.get('window').height/12,
        
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
       marginTop:1,
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
    }
})
