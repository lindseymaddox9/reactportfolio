import Nav from "./nav"
import resume from "./images/ex.pdf"

function Resume(){
    return(
        <section className="content">
        <h2>Check out my <a href={resume} download>resume</a></h2>
        <h2>Skills</h2>
        <ul>
          <li>GIT</li>
          <li>HMTL</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>API's,(Web, Third Party, and Server Side)</li>
          <li>Node.js</li>
          <li>Object Oriented Programming</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Object Relational Mapping</li>
          <li>Model View Controller</li>
          <li>Progressive Web Applications</li>
          <li>React</li>
          <li>MERN</li>
          <li>Manage Global State using React's Context API</li>
          
        </ul>
      </section>  
    )
}
export default Resume