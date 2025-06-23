const {getAbout} = require('../controllers/aboutController.js');
const {getSkills} = require('../controllers/skillsController.js');
const {getSocial} = require('../controllers/socialsController.js');
const {getProjects} = require('../controllers/projectsController.js');
const {getEducations} = require('../controllers/educationsController.js');
const {getTestimonials} = require('../controllers/testimonialsController.js');
const {getCertificates} = require('../controllers/certificatesController.js');
const express = require('express');
const router = express.Router();

router.get('/about', getAbout);
router.get('/skills', getSkills);
router.get('/socials', getSocial);
router.get('/projects', getProjects);
router.get('/educations', getEducations);
router.get('/testimonials', getTestimonials);
router.get('/certificates', getCertificates);

module.exports = router;
