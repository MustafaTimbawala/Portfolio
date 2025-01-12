import React, { useState } from "react"; 
import { BsList } from "react-icons/bs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = () => {
    const textToCopy = "mm.timbawala@gmail.com";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <header className="bg-off-white w-full max-h-fit">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-row justify-between items-center px-8 py-8">
        <div className="flex flex-row items-center space-x-4">
          <div className="bg-[#D9D9D9] flex flex-row items-center p-2 rounded-full">
            <p className="text-gray-700 px-4 font-normal max-h-fit">
              mm.timbawala@gmail.com
            </p>
            <button
              onClick={handleCopy}
              className="bg-white text-black font-body font-semibold rounded-full w-fit py-2 px-4 hover:font-bold"
            >
              Copy
            </button>
          </div>
          <a href="/MustafaTimbawalaResume.pdf" download>
            <button className="bg-white text-black font-body font-semibold rounded-full w-fit max-h-fit py-2 px-6 hover:font-bold">
              CV
            </button>
          </a>
        </div>
        <div className="flex flex-row items-center space-x-4 font-body font-semibold text-sm">
          <a
            className="max-h-fit hover:font-bold"
            href="https://www.linkedin.com/in/mustafa-timbawala/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <p className="max-h-fit">/</p>
          <a
            className="max-h-fit hover:font-bold"
            href="https://github.com/MustafaTimbawala/MustafaTimbawala"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center px-4 py-4">
        <button
          className="text-black font-semibold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <BsList color="#A52A2B" size={40} />
        </button>
      </div>

      {/* Side Panel for Mobile */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-2/3 h-full bg-white text-black flex flex-col space-y-4 p-4">
          <div className="flex flex-row justify-between items-center"> 
            <p className="text-lg font-normal ">Mustafa's Portfolio</p>
            <button
              className="self-end text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>    

          </div>
        {/* Mobile Menu Items */}
          <div className="flex flex-col justify-normal items-center"> 
            <div> 
              <a href="/MustafaTimbawalaResume.pdf" download className=" text-lg font-semibold  hover:font-bold">CV</a>
              
            </div>  
            <div className="w-1/2 h-[2px] m-2 bg-highlight"></div>
            <div> 
              <button
                  onClick={handleCopy}
                  className="bg-white text-black text-lg font-body font-semibold w-fit hover:font-bold"
                >Email</button> 
                
            </div> 
            <div className="w-1/2 h-[2px] m-2 bg-highlight"></div>
             
            <div> 
              <a
                href="https://www.linkedin.com/in/mustafa-timbawala/"
                rel="noreferrer"
                target="_blank"
                className=" font-semibold text-lg hover:font-bold"
              >
                LinkedIn</a>  
            </div> 
            <div className="w-1/2 h-[2px] m-2 bg-highlight"></div>

            <div>
            <a
              href="https://github.com/MustafaTimbawala/MustafaTimbawala"
              rel="noreferrer"
              target="_blank"
              className="font-semibold text-lg hover:font-bold"
            >
              GitHub</a>  
            </div>
            <div className="w-1/2 h-[2px] m-2 bg-highlight"></div>
          </div>
          
        </div>
      )}
    </header>
  );
}
