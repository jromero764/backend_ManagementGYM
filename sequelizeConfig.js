const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://postgres:Sertec01@172.31.66.120:5432/Galme',{
//     define:{
//         timestamps:false
//     },
//     logging:false
// })

const sequelize = new Sequelize('database_name', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false // Si no necesitas timestamps en tus modelos
  },
  logging: false // Para desactivar los registros de la consola
});
const getConnections = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { sequelize, getConnections };
