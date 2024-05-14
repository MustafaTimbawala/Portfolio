
import styles from "@/app/courses/courses.module.css";

/* This fucntion makes a call to the Pocketbase databaase and if successful it will return data in JSON format else will retur an error */
async function getCourse() {
    try {
      let res: any = await fetch('http://127.0.0.1:8090/api/collections/courses/records?page=1&perPage=30',{cache: 'no-store'} );
  
      if (!res.ok) {
        // If response status is not within the range 200-299, throw an error
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }
  
      const data: any = await res.json();
      return data?.items as any[];
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
  
//THis is the function that formats information from the database ino to an object
function CourseBox({course}:any){
    const {id, course_code, title, description, skills} = course || {}; 
    // we put the empty array in case of a failure with the fetch function
    return( 
        <div className={styles.courseCard}> 
            <h3>{title}</h3>
            <h4>Course code: {course_code}</h4>
            <p>Description: {description}</p> 
            <p>Skills aquired: {skills}</p>
        </div>

    ) 

}


export default  async function coursePage(){ 
    let courses: any =  await getCourse();  

    return(
        <div>
            <h1 className={styles.title}>Here are the my completed courses:</h1> 
            <div > 
                {courses?.map((course : any)=>{ 
                    return <CourseBox key={course.id} course={course}/>;
                })}
            </div>
        </div>
        //A summary of all the skills from the course 
        // A selection of filter buttons that if you click will show courses that you learn those skills 
        // this is where I will do some server side rendering showing all the courses that I have done and a description of the courses
        
    )
}