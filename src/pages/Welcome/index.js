import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    //animation="flipInY"
                    source={require('../../assests/img/logouni.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View
                
                animation={"fadeInUp"}
                 
                style={styles.containerForm}>
                <Text style={styles.title}>Bem vindo ao UNI! aplicativo que nos une por um bem maior</Text>
                <Text style={styles.text}>Faça Login para começar</Text>

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('login')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A629A'
    },
    containerLogo: {
        flex:2,
        backgroundColor: '#2A629A',
        justifyContent: 'center', alignContent: 'center'
    }, containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25, 
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        bottom: '15%',
        backgroundColor: '#2A629A',
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignSelf: 'center',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18, 
        color: '#fff',
        fontWeight: 'bold'
    }
})