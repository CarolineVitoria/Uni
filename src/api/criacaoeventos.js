// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker'; // Biblioteca para selecionar imagens
// import api from './api'; // Importa o Axios configurado
// import { encode as btoa } from 'base-64'; // Para converter imagem em Base64

// export default function CriacaoEvento() {
//     const [nomeEvento, setNomeEvento] = useState('');
//     const [descricao, setDescricao] = useState('');
//     const [image, setImage] = React.useState(require('../../../assets/imagempadrao.jpg'));

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true,
//     });

//     if (!result.cancelled) {
//       setImage(result.base64); // Obtém a imagem em formato Base64
//     }
//   };

//   const handleCreateEvent = async () => {
//     if (!title || !description || !image) {
//       Alert.alert('Erro', 'Preencha todos os campos e selecione uma imagem.');
//       return;
//     }

//     try {
//       const response = await api.post('/event/', {
//         title,
//         description,
//         image: btoa(image), // Codifica a imagem em Base64
//       });

//       Alert.alert('Sucesso', 'Evento criado com sucesso!');
//       setTitle('');
//       setDescription('');
//       setImage(null);
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Erro', 'Ocorreu um erro ao criar o evento.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Título</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite o título"
//         value={title}
//         onChangeText={setTitle}
//       />

//       <Text style={styles.label}>Descrição</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite a descrição"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />

//       <Button title="Selecionar Imagem" onPress={pickImage} />
//       {image && <Text style={styles.imageSelected}>Imagem selecionada!</Text>}

//       <Button title="Criar Evento" onPress={handleCreateEvent} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   label: { fontWeight: 'bold', marginBottom: 5 },
//   input: { borderWidth: 1, marginBottom: 15, padding: 10 },
//   imageSelected: { marginTop: 10, color: 'green' },
// });

// export default CreateEventScreen;