import React, { useState } from "react"; 
import { BsChevronDown } from "react-icons/bs";  
import { BsChevronUp } from "react-icons/bs"; 



const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" py-4 md:w-[75vw]">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div className="pb-10vh]">
          <h2 className="text-2xl font-medium text-black">{project.name}</h2> 
          </div> 
          <div>
          <p className="text-sm font-normal text-highlight mt-1">
            {project.tools.join(", ")}
          </p >
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black text-2xl focus:outline-none"
        >
          {isExpanded ? <BsChevronUp /> : <BsChevronDown />   }
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-sm text-black">{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm font-normal text-highlight  hover:font-semibold"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};


export default ProjectCard;
