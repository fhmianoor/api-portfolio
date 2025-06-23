'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        title: 'Capstone Project Dicoding',
        description: 'Proyek kelompok akhir dari bootcamp yang di naungi oleh dicoding. Proyek ini terdapat fitur utama dan tambahan, fitur utama yaitu integrasi dengan model machine learning dan fitur tambahan backend dengan express, seperti (register, login, dictionary dan about)',
        tech: 'Node.js, Express, MySQL, Python',
        repo: '',
        year: 2025
      },
      {
        title: 'Jokiin-ID Website',
        description: 'Landing page kompleks untuk jasa joki tugas dengan fitur service dan testimonial.',
        tech: 'HTML, CSS, Bootstrap, JavaScript',
        repo: 'https://github.com/fahmianoor/jokiin-id',
        year: 2024
      },
      {
        title: 'Sistem Deteksi Pencucian Uang',
        description: 'Integrasi Autoencoder dan REST API untuk deteksi anomali pada transaksi keuangan.',
        tech: 'Node.js, TensorFlow.js, MongoDB',
        repo: 'https://github.com/fahmianoor/aml-anomaly-detector',
        year: 2025
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
