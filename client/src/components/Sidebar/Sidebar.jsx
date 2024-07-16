import React from 'react'
import SearchInput from './SearchInput'
import Logout from '../pages/Logout'
import Conversation from './Conversation'

const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className='divide-px-3'>
        <Conversation/>
        <Logout/>
      </div>
    </div>
  )
}

export default Sidebar
