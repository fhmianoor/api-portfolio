const db = require ('../models/index.js');
const certificates = db.certificates;

const getCertificates = async (req, res) => {
    try {
        const certificateData = await certificates.findAll();
        const result = {
            status: 'ok',
            data: certificateData.map(item => ({
                id: item.id,
                title: item.title,
                issuer: item.issuer,
                image: `${req.protocol}://${req.get('host')}/certificates/${item.image}`,
            }))
        };
        return res.status(200).json(result);
    } catch (error) {   
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getCertificates
};