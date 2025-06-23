const db = require('../models/index.js');
const socials = db.socials;

const getSocial = async (req, res) => {
    try {
        const socialData = await socials.findAll();
        const result = {
            status: 'ok',
            data: socialData.map(item => ({
                id: item.id,
                github: item.github,
                linkedin: item.linkedin,
                instagram: item.instagram
            }))
        };
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getSocial
};