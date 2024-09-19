'use strict';

const { SOURCES } = require('../../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      source: {
        type: Sequelize.ENUM(...SOURCES),
        allowNull: false,
      },
      registration_date: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'events',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('participants', {
      fields: ['full_name'],
      type: 'check',
      where: {
        full_name: {
          [Sequelize.Op.ne]: '',
        },
      },
    });

    await queryInterface.addConstraint('participants', {
      fields: ['email'],
      type: 'check',
      where: {
        email: {
          [Sequelize.Op.ne]: '',
        },
      },
    });

    await queryInterface.addConstraint('participants', {
      fields: ['birthday'],
      type: 'check',
      where: {
        birthday: {
          [Sequelize.Op.lte]: Sequelize.literal('CURRENT_DATE'),
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('participants');
  },
};
