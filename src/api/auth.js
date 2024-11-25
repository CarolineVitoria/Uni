import axios from 'axios';
import { Alert } from 'react-native';

const API_URL = 'http://192.168.18.13:8000/auth/token'; 

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      new URLSearchParams({
        username: username,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Se a requisição for bem-sucedida, o token será retornado
    return response.data.access_token;
  } catch (error) {
    if (error.response) {
      // O erro foi respondido pelo servidor (statusCode != 2xx)
      Alert.alert('Erro', error.response.data.detail || 'Erro ao autenticar');
    } else if (error.request) {
      // Ocorreu erro na requisição (ex: servidor fora do ar)
      Alert.alert('Erro', 'Falha na comunicação com o servidor');
    } else {
      // Erro desconhecido
      Alert.alert('Erro', 'Erro desconhecido');
    }
    throw error; // Re-throw para possível tratamento adicional
  }
};
