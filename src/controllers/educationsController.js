const db = require('../models/index.js');
const educations = db.educations;

const getEducations = async (req, res) => {
    try {
        const educationData = await educations.findAll();
        const result = {
            status: 'ok',
            data: educationData.map(item => ({
                id: item.id,
                school: item.school,
                major: item.major,
                degree: item.degree,
                gpa: item.gpa,
                start: item.start,
                end: item.end
            }))
        };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getEducations
};
