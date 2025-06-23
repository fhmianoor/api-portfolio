'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('abouts', [
      {
        name: 'Muhamad Fahmi Aulia Noor',
        title: 'Backend Developer Pemula',
        bio: 'Saya adalah seorang mahasiswa yang sedang menempuh pendidikan di Sekolah Tinggi Teknologi Cipasung. Saya memiliki minat yang besar dalam pengembangan perangkat lunak, khususnya dalam pengembangan backend. Saya berkomitmen untuk terus belajar dan mengembangkan keterampilan saya di bidang ini.',
        address: 'Kab.Tasikmalaya, Jawa Barat, Indonesia',
        email: 'fahmianoor12@gmail.com',
        image: 'fahmi.jpg',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('abouts', null, {});
  }
};
