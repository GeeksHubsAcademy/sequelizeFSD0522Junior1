'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     
     await queryInterface.bulkInsert('Users', [
       {"name":"Daniel","dni":"21154687H","n_cliente":1,"email":"daniel@prueba.com","phone":"+34654321654","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
       {"name":"Jose Carlos","dni":"37385735X","n_cliente":2,"email":"josecarlos@prueba.com","phone":"+3466498735","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
     ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
