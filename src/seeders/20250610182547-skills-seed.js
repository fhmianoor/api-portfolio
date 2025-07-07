'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('skills', [
      {
        category:'Backend',
        items:'ExpressJS/NodeJS/Restful API'
      },
      {
        category:'Backend',
        items:'Laravel/Restful API'
      },
      {
        category:'Frontend',
        items:'HTML'
      },
      {
        category:'Frontend',
        items:'CSS/Tailwind CSS/Bootstrap'
      },
      {
        category:'Frontend',
        items:'JavaScript'
      },
      {
        category:'Database',
        items:'MongoDB'
      },
      {
        category:'Database',
        items:'MySQL'
      },
      {
        category:'Database',
        items:'PostgreSQL'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
