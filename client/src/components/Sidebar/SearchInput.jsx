import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
<input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-success w-full max-w-xs" />
  <button type='submit' className='btn btn-circle bg-sky-300 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
    </div>
  )
}

export default SearchInput
