

function ProjectCard(props){
return(
    <div className="project-card">
        <div className="card" style={{width: "20rem", height:"30rem"}}>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.github} className="btn btn-primary">Github Repo</a>
    <a href={props.liveURL} className="btn btn-primary">Live App</a>
  </div>
</div>
    </div>
)
}

export default ProjectCard