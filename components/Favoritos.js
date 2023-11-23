import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { buscarFavoritos, removerFavorito } from './database';

const Favoritos = () => {
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
    <View>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removerItem(item)}>
            <View>
              {}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Favoritos;
