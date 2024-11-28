import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Welcome() {
    const navigation = useNavigation();

    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('login'); 
        }, 4000); 

        
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation={'fadeIn'}
                duration={1500} 
                    source={require('../../assests/img/logouni2.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>UNI</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A629A'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#2A629A',
        justifyContent: 'center',
        alignItems: 'center',  // Corrigi alinhamento
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        bottom: '15%',
        backgroundColor: '#2A629A',
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 8,
        
    }
    });