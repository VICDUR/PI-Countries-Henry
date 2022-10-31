const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING      
    },
    dificult: {
      type: DataTypes.ENUM('1','2','3','4','5')      
    },
    time: {
      type: DataTypes.STRING      
    },
    weather: {
      type: DataTypes.ENUM,
      values:  ['Verano', 'Otoño', 'Invierno', 'Primavera']      
    },
  });
};
