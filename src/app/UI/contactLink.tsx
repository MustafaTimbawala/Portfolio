
import styles from "@/app/UI/ui.module.css" 
import { FaGithub} from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si'; 
import { CgMail } from "react-icons/cg";


export default function SocialLinks() {
    // need to apply css stuff to make it look better 
    return( 
        <div  className={styles.stack}>  
        <a href="mailto:mm.timbawala@gmail.com" target="_blank" rel="noopener noreferrer">
            <CgMail size={30} color="#FF9F1C" />
        </a>
        <a href="https://www.linkedin.com/in/mustafa-timbawala" target="_blank" rel="noopener noreferrer">
            <SiIndeed size={30} color="#FF9F1C" />
        </a>
        <a href="https://github.com/MustafaTimbawala" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#FF9F1C" />
        </a>
        </div>
        
    )
}