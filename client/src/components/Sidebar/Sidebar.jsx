import React from 'react'
import SearchInput from './SearchInput'
 
 
import Conversations from '../Conversations/Conversations'
import LogoutButton from './LogoutButton'
import './Sidebar.css'

const Sidebar = () => {
  
   	return (
		<div className='sidebar-container'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
  
}

export default Sidebar
