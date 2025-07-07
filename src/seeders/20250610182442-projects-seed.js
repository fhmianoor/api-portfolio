'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        title: 'Capstone Project Dicoding',
        description: 'Proyek kelompok akhir dari bootcamp yang di naungi oleh dicoding. Proyek ini terdapat fitur utama dan tambahan, fitur utama yaitu integrasi dengan model machine learning dan fitur tambahan backend dengan express, seperti (register, login, dictionary dan about)',
        tech: 'Node.js, Express, MySQL',
        repo: 'https://github.com/orgs/e-Syarat/dashboard',
        year: 2025
      },
      {
        title: 'Story App Dicoding',
        description: 'Web App berbagi cerita yang dibuat sebagai tugas akhir dari kelas Belajar Membuat Aplikasi Web dengan js vanila dan webpack untuk bundling di Dicoding. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, mengedit, dan menghapus cerita.',
        tech: 'HTML, CSS, JavaScript',
        repo: 'https://github.com/fhmianoor/storyapp',
        year: 2025
      },
      {
        title: 'Portfolio API',
        description: 'API untuk mengelola data portofolio pribadi, termasuk informasi tentang diri saya, keterampilan, proyek, dan sertifikat. API ini memungkinkan pengguna untuk mengambil dan memperbarui informasi portofolio.',
        tech: 'Node.js, Express, Sequelize, MySQL',
        repo: 'https://github.com/fhmianoor/api-portfolio',
        year: 2025
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
