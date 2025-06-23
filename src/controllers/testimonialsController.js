const db = require('../models/index.js');
const testtimonials = db.testimonials;

const getTestimonials = async (req, res) => {
    try {
        const testimonialData = await testtimonials.findAll();
        const result = {
            status: 'ok',
            data: testimonialData.map(item => ({
                id: item.id,
                name: item.name,
                company: item.company,
                avatar: `${req.protocol}://${req.get('host')}/testimonials/${item.avatar}`,
            }))
        };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getTestimonials
};