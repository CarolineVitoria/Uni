import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListaHorizontal({ dados }) {
 
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <FlatList
      data={dados}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.itemContainer,
            selectedIndex === index && styles.selectedItem,  // Aplica o estilo se o item for selecionado
          ]}
          onPress={() => setSelectedIndex(index)}  // Atualiza o índice do item selecionado
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#2A629A', 
    height: 25, 
    width: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
    marginTop: 15,
    marginBottom: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 }, 
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 7,
  },
  selectedItem: {
    backgroundColor: '#FF6347', 
  },
  itemText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
  },
});