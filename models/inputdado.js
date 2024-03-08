'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inputdado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inputdado.belongsTo(models.Cadastro);
    }
  }
  Inputdado.init({
    produtoID: DataTypes.STRING,
    qtde: DataTypes.INTEGER,
    local: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inputdado',
  });
  return Inputdado;
};