const API_URL = 'http://universities.hipolabs.com/search';

export const buscarUniversidades = (pais, universidade) => {
  const url = `${API_URL}?country=${pais}&name=${universidade}`;
  return fetch(url).then((response) => response.json());
};
