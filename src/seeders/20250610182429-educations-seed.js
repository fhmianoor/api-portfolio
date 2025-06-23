'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('educations', [
      {
        school: 'Sekolah Tinggi Teknologi Cipasung',
        major: 'Teknik Informatika',
        degree: 'Sarjana (S1)',
        gpa: 3.33,
        start: 2022,
        end: 2026
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('educations', null, {});
  }
};
