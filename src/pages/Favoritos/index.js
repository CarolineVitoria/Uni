import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Aba from '../../componentes/Aba';
import ListaEventos from '../../componentes/ListaEventos';

export function Favoritos() {
  const data2 = [
    {
        nomeEvento: 'Corte de cabelo gratuito',
        donoDoEvento: 'Jonathan Pereira',
        Local: 'Adrianópolis Manaus',
        image: () => <Image style={styles.img } source={require('../../../assets/barbeiro.jpeg')} />,
        imagemDono: '../../../assests/nago.png'
    }]
    return (
      <SafeAreaView  style={styles.container}>
        
          <Aba/>
          <View style={{paddingHorizontal: 10}}>
          <Text style={styles.fav}>Favoritos</Text>
          <ListaEventos dados={data2}/>
          </View>

      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fav:{
    fontSize: 35,
    color: '#2A629A',
    fontWeight: 'bold',
    marginVertical: 25,
    
  },img:{
    width: '100%',
    height: 200
}
})