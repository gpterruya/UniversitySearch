import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { buscarUniversidades } from './api';

const PesquisaUniversidades = ({ navigation }) => {
  const [pais, setPais] = useState('');
  const [universidade, setUniversidade] = useState('');
  const [resultados, setResultados] = useState([]);

  const pesquisar = () => {
    buscarUniversidades(pais, universidade)
      .then((data) => setResultados(data))
      .catch((error) => console.error(error));
  };

  const adicionarFavorito = (universidade) => {
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do país"
        value={pais}
        onChangeText={(text) => setPais(text)}
      />
      <TextInput
        placeholder="Nome da universidade"
        value={universidade}
        onChangeText={(text) => setUniversidade(text)}
      />
      <Button title="Pesquisar" onPress={pesquisar} />

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              adicionarFavorito(item);
              Alert.alert('Adicionado aos Favoritos', `${item.name} foi adicionado aos favoritos!`);
            }}
          >
            <View>
              {/* Display the university name in the list */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PesquisaUniversidades;
