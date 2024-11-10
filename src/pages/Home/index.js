import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';

import ListaHorizontal from '../../componentes/ListaHorizontal';
import ListaEventos from '../../componentes/ListaEventos';

export default function Home() {
    const navigation = useNavigation();
    const data = ['Em alta', 'Educação', 'Saúde', 'Alimentação' ];

    const data2 = [
        {
            nomeEvento: 'Doação de ração',
            donoDoEvento: 'Anjos de Rua',
            Local: 'Parque 10 de novembro, Manaus',
            image: () => <Image style={styles.img}  source={require('../../../assets/cachorros2.jpeg')} />,
            imagemDono: '../../../assests/nago.png'
        },
        {
            nomeEvento: 'Turma capoeira gratuita',
            donoDoEvento: 'Capoeira nago',
            Local: 'Centro, Manaus',
            image: () => <Image style={styles.img} source={require('../../../assets/turma.jpg')} />,
            imagemDono: '../../../assests/nago.png'
        },
        {
            nomeEvento: 'Corte de cabelo gratuito',
            donoDoEvento: 'Jonathan Pereira',
            Local: 'Adrianópolis Manaus',
            image: () => <Image style={styles.img } source={require('../../../assets/barbeiro.jpeg')} />,
            imagemDono: '../../../assests/nago.png'
        }
    ]
    console.log(data2[0].image().props.source='../../../assets/turma.jpg')
    console.log(data2[0].image().props.source)
    return (
        <>
            <View style={styles.fundo}>
            <View style={styles.abalogo}>
            <Image style={styles.logouni} source={require('../../assests/img/logouni.png')}></Image>
            <Text style={styles.nomeuni}>UNI</Text>
        </View>
                <View style={styles.viewconteudo}>
                    <View style={styles.vpesquisa}>
                        <TextInput style={styles.inputPesquisa} placeholder='Pesquisar'>
                        </TextInput>
                    </View>
                    <View style={styles.vcategorias}>
                        <ListaHorizontal dados={data}/>
                    </View>
                    <View style={{marginBottom: '80%'}}>
                        <ListaEventos dados={data2}/>
                    </View>
                </View>

            </View>

        </>

    )
}
const styles = StyleSheet.create({
    titulo: {
        fontSize: 22,
        marginTop: '15%'
    },
    fundo: {
        backgroundColor: '',
        flex: 1,
    },
 viewconteudo: {
        paddingRight: '3%',
        paddingLeft: '3%'
    }, inputPesquisa: {
        height: 32,
        marginTop: 15,
        paddingLeft: 5,
        fontWeight: '500',
        //borderWidth:1,
        backgroundColor: '#5B99C2',
        borderRadius: 6,
    },
    img:{
        width: '100%',
     height: 200
    },
    abalogo: {
        paddingTop: '9%',
        backgroundColor: '#2A629A',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logouni: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        display: 'inline',
    
    },
    nomeuni: {
        fontWeight: 'bold',
        fontSize: 18
    }
    
})