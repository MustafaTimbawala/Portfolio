import styles from "@/app/UI/ui.module.css"

/*This function takes a project prop, desconstructs it and places the information into the ProjectCard format */
export default function ProjectCard({project} :any) {
    // need to apply css stuff to make it look better 
    const {title, description, link} = project || {}
    return( 
        <div className={styles.projCard}>  
        <h4>{title} </h4>
        <p>{description}</p>
        <a href={link} target="_blank" ><button>GITHUB</button></a>
        
       
        </div>
        
    )
}