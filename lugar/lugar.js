
const axios = require('axios');


const getLugarLatLng = async ( dir ) => {

    const encodeUli = encodeURI( dir );
        
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUli }`,
        headers: {'x-rapidapi-key': 'a073347630msh0645e3fd841b396p154293jsnac0d46cd6018'}
    });

    const resp = await instance.get();

    if( resp.data.Results.lengh === 0){
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



   return {
       direccion,
       lat,
       lng
    }

}

module.exports = {
    getLugarLatLng
}


