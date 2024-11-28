import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Aba from '../../componentes/Aba';
import { SafeAreaView } from 'react-native-safe-area-context';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Evento = () => {
    const route = useRoute();
    const { itemData } = route.params; // Acessa os dados passados na navegação
    console.log(route.params);
    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#2A629A' }}>
                <Aba />

                
                <ScrollView style={{ backgroundColor: '#fff', }} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.donoEv}>teste</Text>
                        <Image source={{ uri: itemData.image }} style={styles.img} />
                    </View>

                    <View style={styles.vinformacoes}>
                        <View style={styles.vicons}>
                        <Text style={styles.itemTitle}>{itemData.title}</Text>
                        <TouchableOpacity style={{}}>
                        <Entypo name="heart" size={29} color="#2A629A" height={30} width={32} marginTop={3} />
                        </TouchableOpacity>
                        {/*<FontAwesome5 name="whatsapp" size={24} color="black"  marginTop={3} height={25}  />*/}
                        
                        </View>
                        
                        <Text style={styles.infos}>Localização: {itemData.id}</Text>
                        <Text style={styles.infos}>Data: hieshdi</Text>
                        <Text style={styles.descricao}>
                           {itemData.description}
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginRight: '25%'
    },
    img: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    vinformacoes: {
        backgroundColor: 'rgba(0, 129, 201, 0.17)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,

        flexGrow: 1,
        marginBottom: 30
    },
    donoEv: {
        color: '#2A629A',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    descricao: {
        fontWeight: '600',
        textAlign: 'justify',
        paddingTop: 20,
    },
    infos: {
        paddingBottom: 5,
        fontWeight: '700',
    },
    vicons: {
        flexDirection: 'row',
        marginBottom: 14,
        justifyContent: 'space-between'
    }
});

export default Evento;