import Link from "next/link"
import styles from "@/app/UI/ui.module.css"
import SocialLinks from "./contactLink"

export default function SideNav() {
    // need to apply css stuff to make it look better 
    return( 
        <div className={styles.navBar}> 

        <div className={styles.pageLinks}>
        <div>
        <Link href={"#start"}>Home</Link> 
        </div>  
        <div>
            <Link href={"#resume"}>Resume</Link>
        </div>
        <div> 
            <Link  href={"#projects"}>Projects</Link>
        </div>
        
        </div>
      
       
        </div>
        
    )
}