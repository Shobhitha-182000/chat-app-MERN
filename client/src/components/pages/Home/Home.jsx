import React from 'react'
// import MessageContainer from '../MainContent/MessageContainer'
// import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineModeComment } from "react-icons/md";
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import MessageContainer from '../../MainContent/MessageContainer';
import './Home.css'

const Home = () => {
  return (
    // <div> 
    //   <Link to="../chat">
    //         <MdOutlineModeComment style={{ height: '50px', width: '50px' }} />
    //       </Link>
	 
    // </div>
    
       <div className="home-container">
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
       </div>
    
   
  )
}

export default Home
