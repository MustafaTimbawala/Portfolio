
import './App.css';
import ProjectCard  from './components/ProjectCard';
import { projects } from './projects';

function App() {
  return (
    <div className="bg-off-white flex flex-col items-center justify-start font-body"> 
    {/* Section 1 Landing Page */} 
    <div className='h-fit w-full  flex flex-col items-center justify-start px-[7.5vw] md:h-[85vh]'> 
      <div className='flex flex-col items-center justify-between w-full pt-[10vh] md:flex-row-reverse '> 
        <div className='flex flex-col items-center w-72 h-128'><img alt='Mustafa Timbawala' src='Mustafa_PFP.png'></img></div>  
        <div> 
          <p className='text-3xl font-medium'>Hello! I am</p>
          <p className='text-highlight text-6xl font-semibold'>Mustafa</p> 
          <p className='text-highlight text-6xl font-semibold'>Timbawala</p>  
          <div className='flex flex-row pt-4'> 
            <p className='text-3xl pr-2'>A</p><p className='text-3xl font-semibold '>Software Developer.</p>
          </div>
          
        </div> 
      </div>
      
      <div className='pt-16 pb-[7.5vh]'> 
        <a href='#Projects' className='scroll-smooth'><button className='text-highlight bg-white rounded-full px-6 py-2 text-lg font-medium hover:font-semibold'>Projects</button></a>
      </div> 
      <div className="w-[85vw] h-px bg-highlight"></div>
  
    </div> 
    {/* Section 2 Skills Page */}  
    <div className='h-fit w-full flex flex-col items-center justify-start px-[7.5vw] md:h-screen'>  
      <div className='pb-[10vh] pt-4'> 
        <p className="font-body text-5xl text-highlight font-medium" >Skills</p>
      </div>  
      <div className='flex flex-col items-center justify-around w-full md:flex-row'>
        <div>
          <p className=' font-medium text-3xl'>Full Stack Dev</p> 
          <div className='flex flex-col h-[60vh] justify-evenly'>
            <div>
              <p className='text-highlight text-lg pb-1'>Languages</p> 
              <p className='font-semibold w-3/4'>JavaScript, Python, Java, TypeScript</p>
            </div>
            <div>
              <p className='text-highlight text-lg pb-1'>Frameworks</p> 
              <p  className='font-semibold w-3/4'>React, Node.js, Express, Flask</p>
            </div>
            <div> 
              <p className='text-highlight text-lg pb-1'>Databases</p>
              <p  className='font-semibold w-3/4'>MongoDB, PostgreSQL, Firebase, AWS S3, MySQL</p>
            </div>
          </div>
          
        </div> 
        <div>
          <p className=' font-medium text-3xl'>UI & UX</p>  
          <div className='flex flex-col h-[60vh] justify-evenly'>
            <div>
            <p className='text-highlight text-lg'>Tools</p> 
            <p  className='font-semibold w-3/4'>Figma</p>
            </div> 
            <div> 
              <p className='text-highlight text-lg'> Libraries</p> 
              <p  className='font-semibold w-3/4'>Material-UI, TailwindCSS, ChakraUI, BootStrap</p>
              </div> 
            <div>
              <p className='text-highlight text-lg'>Design Principles</p> 
              <p  className='font-semibold w-3/4'>Responsive, Intuitive, User-Centric, Efficient</p>
            </div>
          </div> 
        </div> 
        <div>
          <p className=' font-medium text-3xl'>Mobile Dev</p> 
          <div className='flex flex-col h-[60vh] justify-evenly'>

          <div>
            <p className=" text-highlight text-lg">Languages  </p> 
            <p className='font-semibold w-3/4'>Java,TypeScript, Kotlin</p>
          </div>
          <div>
            <p className='text-highlight text-lg'>Frameworks</p> 
            <p className='font-semibold w-3/4'>React Native, Expo, Android Studio</p>
          </div>
          <div>
            <p className='text-highlight text-lg' >Tools</p> 
            <p className='font-semibold w-3/4'>Android Studio, Jira, Git, MongoDB, Firebase, 
            </p>
          </div> 
          </div>
        </div>
      </div>
      
      <div className="w-[85vw] h-px mt-[10vh] bg-highlight"></div>
    </div>
    {/* Section 3 Projects Page Page */}
    <div className='min-h-screen w-full flex flex-col items-center justify-start px-[7.5vw]' id="Projects"> 
         <div> 
            <p className="font-body text-5xl text-highlight font-medium py-[5vh]" >Projects</p> 
         </div> 
         <div> 
          {projects.map((project) => ( 
            <ProjectCard project={project} key={project.name} />
           ))}
         </div>
        
    </div> 
    <div className="w-[85vw] h-px mt-[10vh] bg-highlight"></div>
     
      
    </div>
  );
}

export default App;
