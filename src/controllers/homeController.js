const homeController = async (req, res) => {
res.status(200).json({
    name: "Muhamad Fahmi Aulia Noor",
    role: "Fullstack JavaScript Developer",
    intro: "Welcome to my personal portfolio. I craft fast APIs, modern UI, and love building impactful software. Explore my work and skills below.",
    ctaText: "See My Projects",
    ctaLink: "#/projects"
})
}

module.exports = {
    homeController
};