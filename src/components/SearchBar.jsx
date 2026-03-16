import React from 'react'
import { useContext } from 'react'

const SearchBar = () => {
    const {search,setSearch, showSearch,setshowSearch}=useContext(ShopContext);
  return  showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4  sm:w-1/2 '>
        <input type="text"  placeholder=''/>        
      </div>
      
    </div>
  ) : null
}

export default SearchBar
