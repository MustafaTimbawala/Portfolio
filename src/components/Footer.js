export const Footer = () => {  
    const year = new Date().getFullYear(); 
    return(  
        
        <div className='bg-off-white w-full max-h-fit flex flex-row justify-center items-center px-8 py-8'> 
            <p className="text-highlight">{year} All Rights Reserved.</p>
        </div>
    )
}; 
