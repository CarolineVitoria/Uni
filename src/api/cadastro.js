import axios from 'axios';

export const cadastro_user = async (name, email, password, cpf, phone_number) => {
  try {
    const response = await axios.post('http://10.0.2.2:8000/users', {
      name,
      email,
      password,
      cpf,
      phone_number,
    });

    return response.data;
  } catch (error) {
    // mensagem de erro
    if (error.response) {
      // O servidor respondeu com um código de erro
      console.error('Erro no cadastro:', error.response.data.detail);
      throw new Error(error.response.data.detail);
    } else if (error.request) {
      // Não houve resposta do servidor
      console.error('Erro na requisição:', error.request);
      throw new Error('Erro de rede. Tente novamente.');
    } else {
      // Outro erro desconhecido
      console.error('Erro:', error.message);
      throw new Error('Ocorreu um erro inesperado.');
    }
  }
};
