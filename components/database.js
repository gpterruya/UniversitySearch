import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@Favoritos';

export const buscarFavoritos = async () => {
  try {
    const favoritosString = await AsyncStorage.getItem(STORAGE_KEY);
    if (favoritosString) {
      const favoritos = JSON.parse(favoritosString);
      return favoritos;
    }
    return [];
  } catch (error) {
    throw new Error('Erro ao buscar favoritos');
  }
};

export const adicionarFavorito = async (universidade) => {
  try {
    const favoritos = await buscarFavoritos();
    const novaLista = [...favoritos, universidade];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
  } catch (error) {
    throw new Error('Erro ao adicionar aos favoritos');
  }
};

export const removerFavorito = async (universidade) => {
  try {
    const favoritos = await buscarFavoritos();
    const novaLista = favoritos.filter((item) => item.name !== universidade.name);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
  } catch (error) {
    throw new Error('Erro ao remover dos favoritos');
  }
};
