import React from 'react'
import NavBar from '../../components/NavBar'
import backgroundImage from '../../assets/readpageBG.gif'
import scroll from '../../assets/ReadScroll.png'

function ReadPage() {
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-row justify-center items-center p-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex items-center justify-center h-screen relative">
        <img className="h-screen w-[1100px]" src={scroll} alt="background" />
        <p className="absolute h-[50vh] w-[37%] z-10 flex flex-col items-center justify-center overflow-y-scroll bg-slate-400 bg-opacity-20 rounded-lg p-4 text-justify text-neutral-900 text-lg text-opacity-100 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. 
        </p>
      </div>

     <a href="/levelpage"><button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl">
            Continue
            </button></a>   
    </div>
    
    </>
  )
}

export default ReadPage