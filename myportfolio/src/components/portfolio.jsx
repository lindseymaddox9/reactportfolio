import Nav from "./nav"
import ProjectCard from "./projectCard"

function Portfolio(){
  const projects=[
    {
      title: "Social Media Startup",
      description: "a social media app for friends",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      github: "https://github.com/lindseymaddox9/socialmediastartup",
      liveURL: "https://lindseymaddox9.github.io/socialmediastartup/"
    },
    {
      title: "Blog",
      description: "Midnight Magnolia",
      image: "https://banner2.cleanpng.com/20180713/ske/kisspng-watercolor-painting-drawing-tattoo-watercolour-flo-jewell-5b48dcdfc130d0.8891896015315017917913.jpg",
      github: "https://github.com/lindseymaddox9/Blog",
      liveURL: "https://lindseymaddox9.github.io/Blog/"
    },
    {
      title: "Weather App",
      description: "weather app",
      image: "https://freepngimg.com/thumb/categories/2275.png",
      github: "http://github.com",
      liveURL: "http://google.com"
    },
    {
      title: "Text Editor",
      description: "It's a text editor",
      image: "https://kinsta.com/wp-content/uploads/2019/01/best-text-editors-1024x512.png",
      github: "https://github.com/lindseymaddox9/text-editor",
      liveURL: "http://google.com"
    },
  ]
    return(
        <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
        {
          projects.map(project => {
            return (
              <div>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  github={project.github}
                  liveURL={project.liveURL}
                />
              </div>
            )
          })
        } 
        </div>
      </section>  
    )
}
export default Portfolio