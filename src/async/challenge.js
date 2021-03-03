const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(`🚀 ~ counter: `, data.info.count);
    console.log(`🚀 ~ character: `, character.name);
    console.log(`🚀 ~ origen: `, origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before API");
anotherFunction(API);
console.log("After API");
