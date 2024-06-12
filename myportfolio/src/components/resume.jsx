import Nav from "./nav"
import resume from "./images/ex.pdf"

function Resume(){
    return(
        <section className="content">
        <h2>Check out my <a href={resume} download>resume</a></h2>
        <h2>Front End Topics</h2>
        <ul>
          <li>HMTL</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <h2>Back End Topics</h2>
        <ul>
          <li>Node.js</li>
        </ul>
      </section>  
    )
}
export default Resume