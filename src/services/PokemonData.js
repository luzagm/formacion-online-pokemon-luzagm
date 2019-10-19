const url = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const GetData = () => {
  return fetch(url).then(response => response.json());
};

export default GetData;
