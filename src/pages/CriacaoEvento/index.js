import React from 'react';
import { useState } from 'react';
import { Button, Image, View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Aba from '../../componentes/Aba';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CriacaoEvento() {
  const [nomeEvento, setNomeEvento] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img64, setimg64] = useState('');
  const [image, setImage] = React.useState(require('../../../assets/imagempadrao.jpg'));

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    });



    if (!result.canceled) {
      setimg64(result.assets[0].base64);
      setImage(result.assets[0].uri);
      console.log(result.assets[0])
      /*const selectedAsset = result.assets[0];
      const filename = selectedAsset.uri.substring(selectedAsset.uri.lastIndexOf('/') + 1);
      const extend = filename.split('.').length > 1 ? filename.split('.')[1] : 'jpeg'; // Define uma extensão padrão caso não tenha

      console.log('Filename:', filename);
      console.log('File extension:', extend);

      // Criação do FormData para enviar a imagem
      const formData = new FormData();
      formData.append('file', {
        name: filename,
        uri: selectedAsset.uri,
        type: selectedAsset.mimeType || 'image/' + extend,
      });

      console.log(formData) */


    }
    
  };

  const enviaDados= async () => {
    if (!image) {
      alert('Por favor, selecione uma imagem.');
      return;
    }

    if (!nomeEvento || !descricao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const objEvento = {
      'image':img64,
      'title': nomeEvento,
      'description': descricao
    }
    // enviar via fetch para o back 
    try {
      const accessToken = await AsyncStorage.getItem('access_token');

      if (!accessToken) {
      throw new Error('Token não encontrado. Faça login novamente.');
      }
      const response = await fetch('http://192.168.18.13:8000/event/', {  
        method: 'POST',
        body: JSON.stringify(objEvento), 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      
      const responseText = await response.text();  // Obtém a resposta como texto
      console.log('Resposta da API:', responseText);  // Mostra o conteúdo da resposta
      try {
        const result = JSON.parse(responseText);  // Tenta fazer o parse manualmente
        if (response.ok) {
          alert('Evento criado com sucesso!');
          console.log(result);
        } else {
          alert('Erro ao criar evento.');
        }
      } catch (error) {
        console.error('Erro ao analisar a resposta JSON:', error);
        alert('Erro ao criar evento. Resposta inválida.');
      }
    }
    catch(error){
      console.error(error);
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <Aba/>
      
      <View style={{ justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.tit}>Crie seu evento</Text>
      <TouchableOpacity style={styles.cview} onPress={pickImage} >
      {image && (
        <Image 
          source={typeof image === 'string' ? { uri: image } : image} 
          style={styles.image} 
        />
      )}
      </TouchableOpacity>
      
      <TextInput value={nomeEvento}
          onChangeText={setNomeEvento} placeholder='Nome do evento' style={styles.input}></TextInput>
      <TextInput value={descricao}
          onChangeText={setDescricao}
          multiline={true} placeholder='Descrição' style={styles.inputDesc}></TextInput>
      <Button title='Enviar' onPress={enviaDados}>
        
      </Button >
      </View>
      
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  image: {
    width: '100%',
    height: 200,
  },
  input: {
    height: '4rem',
    width: '90%',
    //borderWidth:1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    
    borderColor: 'black',
    borderWidth: 2,
  },
  botao: {
    marginTop: 10
  },
  inputDesc: {
    backgroundColor: '#fff',
    height: 90,
    width: '90%',
    marginTop: 30,
    borderRadius: 5,
    
    marginBottom: 20,
    textAlignVertical: 'top', // Alinha o texto no início (topo) do campo
    paddingTop: 5,
    paddingLeft:5, // Ajuste para melhorar o layout
    borderColor: 'black',
    borderWidth: 2,  
  },
  cview: {
    backgroundColor: 'grey',
    width: '90%',
    marginTop: '7%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  
  },
  tit:{
    marginTop: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2A629A'
  }
});