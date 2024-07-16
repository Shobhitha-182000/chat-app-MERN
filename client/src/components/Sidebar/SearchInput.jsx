import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
<input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-success w-full max-w-fit" />
  <button type='submit' className='btn btn-circle bg-sky-300 text-white w-11 '>
				<IoSearchSharp className='w-4 h-4 outline-none' />
			</button>
    </div>
  )
}

export default SearchInput
