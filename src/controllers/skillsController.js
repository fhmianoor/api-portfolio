const db = require('../models/index.js');
const skills = db.skills;

const getSkills = async (req, res) => {
    try{
        const skillData = await skills.findAll();
        const result = {
            status: 'ok',
            data: skillData.map(item => ({
                id: item.id,
                category: item.category,
                items: item.items
            }))
        };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getSkills
};
