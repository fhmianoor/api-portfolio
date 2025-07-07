'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('socials', [ 
      {
        github: 'https://github.com/fhmianoor',
        linkedin: 'https://www.linkedin.com/in/muhamad-fahmi-aulia-noor-780345219/',
        instagram:'https://www.instagram.com/fhmianoor/'
      }
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
