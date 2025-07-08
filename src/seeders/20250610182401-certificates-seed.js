'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('certificates', [
      {
        title: 'Backend Certification',
        issuer: 'Dicoding Indonesia',
        image: 'backend.png'
      },
      {
        title: 'Frontend Certification',
        issuer: 'Dicoding Indonesia',
        image: 'fundamental.png'
      },
      {
        title: 'Frontend Certification',
        issuer: 'Dicoding Indonesia',
        image: 'fepemula.png'
      },
      {
        title: 'JavaScript Certification',
        issuer: 'Dicoding Indonesia',
        image: 'dasar.png'
      },
      {
        title: 'MongoDB Certification',
        issuer: 'CodePolitan X Alibaba Cloud',
        image: 'mongodb.png'
      },
      {
        title: 'Express JS Certification',
        issuer: 'CodePolitan X Alibaba Cloud',
        image: 'restfulapi.png'
      },
      {
        title: 'Alibaba Cloud Certification',
        issuer: 'CodePolitan X Alibaba Cloud',
        image: 'ALIBABA CLOUD.jpg'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('certificates', null, {});
  }
};
