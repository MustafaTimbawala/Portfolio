import Link from "next/link"
import styles from "@/app/UI/ui.module.css"
import SocialLinks from "./contactLink"

export default function SideNav() {
    // need to apply css stuff to make it look better 
    return( 
        <div className={styles.firstContainer}> 
        <div>
        <Link href={"/"} >Home</Link> 
        </div>
         <div>
            <SocialLinks/>
         </div>
         
       
        </div>
        
    )
}