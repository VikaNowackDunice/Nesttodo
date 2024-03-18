'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todolist', {
      text: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isChecked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },

      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }
    });
  },

  // eslint-disable-next-line no-unused-vars
  async down(_queryInterface, _Sequelize) {
    await _queryInterface.dropTable('todolist');
  },
};
