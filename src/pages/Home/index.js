import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import ListaHorizontal from '../../componentes/ListaHorizontal';
import ListaEventos from '../../componentes/ListaEventos';

export default function Home() {
    const navigation = useNavigation();
    
    const data = ['Em alta', 'Educação', 'Saúde', 'Alimentação' ];
/*
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
    ] */
    //console.log(data2[0].image().props.source='../../../assets/turma.jpg')
    //console.log(data2[0].image().props.source)
    
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('inicio hjk '+ eventos)
    // Função para buscar os eventos
    
    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:8000/event/home');
            setEventos(response.data); // Atualiza o estado com os eventos
            console.log(response.data)
        } catch (err) {
            setError(err);
            alert(err)
        } finally {
            setLoading(false);
        }
    };

    // Usando useEffect para buscar os eventos e configurar o intervalo
    useEffect(() => {
        fetchEvents();

       /*const intervalId = setInterval(() => {
            fetchEvents();
        }, 5000000); // Atualiza a cada 5 segundos

        // Limpeza do intervalo quando o componente for desmontado
        return () => clearInterval(intervalId); */
    }, []); // O efeito roda uma vez ao montar o componente 
    
    // Exibindo o carregamento enquanto os eventos não são carregados
    console.log(eventos)
    
    return (
        <>
            <View style={styles.fundo}>
            <View style={styles.abalogo}>
            <Image style={styles.logouni} source={require('../../assests/img/logouni2.png')}></Image>
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
                        <ListaEventos dados={eventos}/>
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
        color:'white'
    
    },
    nomeuni: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'white'
    }
    
})