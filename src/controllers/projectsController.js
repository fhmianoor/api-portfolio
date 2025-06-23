const db = require('../models/index.js');
const projects = db.projects;

const getProjects = async (req, res) => {

    try {
        const projectData = await projects.findAll();
        const result = {
            status: 'ok',
            data: projectData.map(item => ({
                id: item.id,
                title: item.title,
                description: item.description,
                repo: item.repo,
                year: item.year
            }))
        };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getProjects
};
