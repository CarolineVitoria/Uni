import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

export default function Home(){
    return(
        <Text style={styles.titulo}>Home</Text>
    )
}
const styles = StyleSheet.create({
    titulo: {
        fontSize:22,
        marginTop: '15%'
    }
})