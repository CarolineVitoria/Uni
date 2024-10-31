import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';



export default function Register(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    titulo: {
        fontSize:22,
        marginTop: '15%'
    },
    container: {
        backgroundColor: '#2A629A',
        flex: 1
    }
})