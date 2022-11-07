 //            .========.        .========.
 //           // I .'..' \      // VI.'.,".\
 //           || II .'..'|      || VII..'..|
 //           || III .'."|      || VIII,'.'|
 //           || IV ,','.|      || IX.'".'.|
 //           || V '..'.'|      || X .'..',|
 //           .\_________/      .\_________/
 //           
 //                ,   ,
 //               /////|
 //              ///// |
 //             /////  |
 //            |===| | |
 //            | B | |/|
 //            | I |/| |
 //            | B | | |
 //            | L | | |
 //            | I |  / 
 //            | A | /
 //            |===|/
 //            '---'
 //           

const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const getCountriesPreCarga = require('./src/helpers/precargaCountriesDb.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async() => {
    
    const allCountries = Country.findAll();
      // se consulta el modelo Country y se pasa por un condicional 
      // si no existe info ,se trae la data de la api Contries 
      // mendiante la funcion getCountriesPreCarga() a la DB.
    if(!allCountries.length){ 
      const infoApi = await getCountriesPreCarga()
      await Country.bulkCreate( infoApi )
       console.log('Data infoApi upload OK')
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  }); 
});
