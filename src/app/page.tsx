//import Image from "next/image";
import ProjectCard from "./UI/projectCard";
import styles from "./page.module.css";

export default function Home() { 
  // this will be a simple list of objects that contain my top 4 favorite projects that
  //displays my skills as software developer
  const B58project: { title: string, description: string, link: any } = {
    title: "Assembly Game",
    description: "This is a 2D platform game that was developed using MIPS assembly",
    link: "https://github.com/MustafaTimbawala/CSCB58_FinalProject"
  }; 
  const B07Project:{title: string, description:string, link:any}= { 
    title: "Android App", 
    description: "This is an android app developed with other team members that employed in its production the Agile methodology, Scrum,...", 
    link:"https://github.com/MustafaTimbawala/B07GR12",
  } ; 



  return (
    <div>
      <div className={styles.start} >
      <p className={styles.greeting}><b>Welcome.</b> I am</p>
      <h1 className={styles.identification}>Mustafa Timbawala</h1> 
      <p className={styles.introduction}>I am an aspiring software engineer. 
      I am also a third year Computer Science student specializing in 
      Software Engineering at the Universtity of Toronto Scarborough.</p>  
      </div> 
      <div className={styles.skills}>
        <h3>These are my skills: </h3> 

        <div className={styles.skillContainer}> 
          
          <div className={styles.skillWord}>
            <div><p> C </p> </div><p> Java </p> <p> Python </p> <p> Git </p> <p> JavaScript </p>
          </div>

          <div className={styles.skillWord}>
            <p> HTML </p> <p> CSS </p> <p> SQL </p> <p> React </p> <p> Android Studio </p>
          </div>
                   
        </div>
        
      </div> 
      <div className={styles.projectSec}> 
        <div> 
            <h3 className={styles.subtitle}>Here are some of my projects: </h3>  
        </div>  
        <div className={styles.projectBin}> 
          <ProjectCard project={B58project} />
          <ProjectCard project={B07Project}/>

        </div>
        
      </div> 


    </div>
 
    
  );
}
