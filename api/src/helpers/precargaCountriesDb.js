const axios = require('axios')


async function getCountriesPreCarga (){
    
    const urlApi = await axios.get('https://restcountries.com/v3/all')
    const infoApi = await urlApi.data.map( country => {
        return {
            id: country.cioc || country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continents: country.continents[0],
            capital: country.hasOwnProperty('capital') ? country.capital[0] : 'None',
            subregion: country.hasOwnProperty('subregion')?  country.subregion :'None', 
            area: country.hasOwnProperty('area')? country.area :'None',
            population: country.hasOwnProperty('population')? country.population :'None',
        }
    })
    
     
    // Ordenamiento de la infoApi
    // const order = infoApi.sort( (a, b) => {
    //     if( a.name > b.name ) return 1;
    //     if( b.name > a.name ) return -1;
    //     return 0
    // } )
    // console.log('order', order)
    // return order
    return infoApi

}

module.exports = getCountriesPreCarga;
