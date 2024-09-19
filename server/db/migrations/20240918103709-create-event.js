'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      organizer: {
        type: Sequelize.STRING,
        allowNull: false,
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

    await queryInterface.addConstraint('events', {
      fields: ['title'],
      type: 'check',
      where: {
        title: {
          [Sequelize.Op.ne]: '',
        },
      },
    });

    await queryInterface.addConstraint('events', {
      fields: ['description'],
      type: 'check',
      where: {
        description: {
          [Sequelize.Op.ne]: '',
        },
      },
    });

    await queryInterface.addConstraint('events', {
      fields: ['organizer'],
      type: 'check',
      where: {
        organizer: {
          [Sequelize.Op.ne]: '',
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  },
};
