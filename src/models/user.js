const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelizeConfig');

const model_usuario_sistema = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING
  },
  googleId: {
    type: DataTypes.STRING, 
    allowNull: true, 
    unique: true, 
  }
},
  {
    tableName: 'user'
  }
);

module.exports = model_usuario_sistema;
