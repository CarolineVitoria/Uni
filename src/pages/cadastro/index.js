import React, { useState } from "react";
import { themas } from "../../global/themas";
import {
    Text,
    View,
    Alert,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
   Dimensions 
} from 'react-native';
//import Logo from '../../assets/img/logouni.png'
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
//import cadastro
import {cadastro_user} from "../../api/cadastro";
import { login } from "../../api/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro(){
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
      
    const handleCadastro = async () => {

        if (!name || !email || !password || !cpf || !phoneNumber) {
            Alert.alert("Erro", "Todos os campos são obrigatórios!");
            return;
          }
          try {
            await cadastro_user(name, email, password, cpf, phoneNumber);
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

            const token = await login(email, password);
            await AsyncStorage.setItem('access_token', token);

            navigation.navigate("login"); // Navega para a tela de login
          } catch (error) {
            Alert.alert("Erro", error.message || "Não foi possível realizar o cadastro.");
          }
     };
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
         value={email}
         onChangeText={setEmail}
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
         value={cpf}
         onChangeText={setCpf} 
        />
        <FontAwesome
        name='check-square'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    <Text style={styles.titleInput}>Contato</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
         value={phoneNumber}
         onChangeText={setPhoneNumber}
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
         value={password} // Corrigido para o estado de password
         onChangeText={setPassword}
         secureTextEntry
        />
        <MaterialIcons
        name='remove-red-eye'
        size={20}
        color={themas.colors.primary}
        />
    </View>

    <Text style={styles.titleInput}>Nome</Text>
    <View style={styles.boxInput}>       
        <TextInput
         style={styles.input}
         value={name}
         onChangeText={setName}
        />
        <FontAwesome
        name='user'
        size={20}
        color={themas.colors.primary}
        />
    </View>
    </View>
    <View style={styles.boxBottom}>
    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
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
        paddingVertical:10,
        
        
    },
    boxBottom:{
        height:Dimensions.get('window').height/5,
        width:'100%',
        //backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end',

    },

    rodacadastro:{
        height:540,
        width: 160,
        marginTop: 560,
        position: "absolute",
        top: 1,
        right: 200
       //width:'100%',
        //height:Dimensions.get('window').height/12,
        //height:'100%'
        
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
        marginTop:10,
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