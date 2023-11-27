// PesquisaUniversidades.js

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';
import { buscarUniversidades } from './api';
import { adicionarFavoritoNoBanco } from './database';

const PesquisaUniversidades = ({ navigation }) => {
  const [pais, setPais] = useState('');
  const [universidade, setUniversidade] = useState('');
  const [resultados, setResultados] = useState([]);

  const pesquisar = () => {
    buscarUniversidades(pais, universidade)
      .then((data) => setResultados(data))
      .catch((error) => console.error(error));
  };

  const irParaFavoritos = () => {
    navigation.navigate('Favoritos');
  }

  const adicionarFavorito = (universidade) => {
    adicionarFavoritoNoBanco(universidade)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do país"
        value={pais}
        onChangeText={(text) => setPais(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome da universidade"
        value={universidade}
        onChangeText={(text) => setUniversidade(text)}
      />
      <Button title="Pesquisar" onPress={pesquisar} />
      <Button title="Favoritos" onPress={irParaFavoritos} />

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              adicionarFavorito(item);
              Alert.alert('Adicionado aos Favoritos', `${item.name} foi adicionado aos favoritos!`);
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default PesquisaUniversidades;
