const db = require ('../models/index.js');
const about = db.about;

const getAbout = async (req, res) => {
    try{
        const aboutData = await about.findAll();
    
      const result = {
        status: 'ok',
        data: aboutData.map(item => ({
          id: item.id,
          name: item.name,
          title: item.title,
          bio: item.bio,
          address: item.address,
          email: item.email,
          image: `${req.protocol}://${req.get('host')}/about/${item.image}`,
        }))
      };
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
    getAbout
}