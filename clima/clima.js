const axios = require('axios');

const getClima = async (lat, lng) => {

    //const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }lon=${ lng }appid=6bfb58a97db88265fbcd2f7785d9b31b` );
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6bfb58a97db88265fbcd2f7785d9b31b&units=metric`);
    return resp.data.main.temp;
}




module.exports = {
    getClima
}