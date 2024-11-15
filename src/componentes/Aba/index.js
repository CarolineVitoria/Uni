import { View, Image, Text, StyleSheet } from 'react-native'

export default function Aba() {
    return (
        <View style={styles.abalogo}>
            <Image style={styles.logouni} source={require('../../assests/img/logouni.png')}></Image>
            <Text style={styles.nomeuni}>UNI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
abalogo: {
    paddingTop: '0%',
    backgroundColor: '#2A629A',
    height: 47,
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