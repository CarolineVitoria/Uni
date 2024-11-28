import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Aba from '../../componentes/Aba';
import ListaEventos from '../../componentes/ListaEventos';
// import Jogo from '../../assets/img/image.png'
// import Fundo from '../../assets/img/fundo.png'
// import Config from '../../assets/img/config.png'
// import Verif from '../../assets/img/verif.png'
// import Apoio from '../../assets/img/apoio.png'
// import Insta from '../../assets/img/instagram.png'
export function Usuario() {
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
    }
    
  };
  return (

    <SafeAreaView style={{
      flex: 1,
      //backgroundColor:'gray',
      backgroundColor: 'white',
    }}>
      <Aba />

      <View style={{ width: "100%" }}>
        <Image
          source={require('../../assests/img/fundo.png')}
          resizeMode='cover'
          style={{
            height: 210,
            width: "100%"
          }}
        />
      </View>

      <View style={{ width: "100%", position: "relative" }}>
        <Image
          source={require('../../assests/img/config.png')}
          resizeMode='contain'
          style={{
            height: 90,
            width: 35,
            marginTop: -230,
            position: "absolute",
            top: 1,
            right: 10
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={pickImage}>
        <Image
          source={require('../../assests/img/image.png')}
          resizeMode='contain'
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: '#5B99C2',
            borderWidth: 2,
            marginTop: -90
          }}
        />
        </TouchableOpacity>
        
        <View style={{ width: "100%", position: "relative" }}>
          <Image
            source={require('../../assests/img/verif.png')}
            resizeMode='contain'
            style={{
              height: 90,
              width: 25,
              marginTop: -25,
              position: "absolute",
              top: 1,
              right: 40
            }}
          />
        </View>



        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginVertical: 5,
          marginHorizontal: 50,
          textAlign: 'center'
        }}>
          OBA - Organização Bicho Amado
        </Text>
        <Text style={{
          fontSize: 12,
          textAlign: 'justify',
          marginHorizontal: 40
        }}>
          Acreditamos na importância desse trabalho de extrema necessidade, tendo em vista o grande numero de animais de rua de pessoas carentes no sentido de promover saúde, abrigo e bem-estar.
        </Text>

        <View style={{ width: "100%", position: "relative" }}>
          <Image
            source={require('../../assests/img/instagram.png')}
            resizeMode='contain'
            style={{
              height: 90,
              width: 80,
              marginTop: -30,
              position: "absolute",
              top: 1,
              right: 260
            }}
          />
        </View>

        <View
          style={{
            height: 2,
            width: '100%',
            marginVertical: 0,
            backgroundColor: '#5B99C2',
            marginTop: 30



          }} />

        <View style={{ width: "100%", position: "relative" }}>
          <Image
            source={require('../../assests/img/apoio.png')}
            resizeMode='contain'
            style={{
              height: 90,
              width: 80,
              marginTop: -48,
              position: "absolute",
              top: 1,
              right: 30
            }}
          />
        </View>
        <View style={{ width: "100%", position: "relative" }}>
          <Image
            source={require('../../assests/img/gatin.png')}
            resizeMode='contain'
            style={{
              height: 280,
              width: '100%',
              marginTop: 20,
              position: "absolute",
              top: 1,
              right: -2
            }}
          />
        </View>

      </View>

    </SafeAreaView>
  );
}

