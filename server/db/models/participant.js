'use strict';
const { Model } = require('sequelize');
const { SOURCES } = require('../../constants');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate (models) {
      Participant.belongsTo(models.Event, {
        foreignKey: {
          name: 'eventId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Participant.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,31} [A-Z][a-z]{1,31}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isBefore: new Date().toISOString(),
        },
      },
      source: {
        type: DataTypes.ENUM(...SOURCES),
        allowNull: false,
      },
      registrationDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Participant',
      underscored: true,
    }
  );
  return Participant;
};
