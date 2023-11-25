// Favoritos.js

import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';
import { buscarFavoritos, removerFavorito } from './database';

const Favoritos = ({ route }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    buscarFavoritos()
      .then((data) => setFavoritos(data))
      .catch((error) => console.error(error));
  }, []);

  const removerItem = (universidade) => {
    removerFavorito(universidade)
      .then(() => {
        Alert.alert('Removido dos Favoritos', `${universidade.name} foi removido dos favoritos!`);
        setFavoritos((prev) => prev.filter((item) => item.name !== universidade.name));
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => removerItem(item)}
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
  itemContainer: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default Favoritos;
