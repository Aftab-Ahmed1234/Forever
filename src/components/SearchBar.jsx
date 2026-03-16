import React from 'react'
import { useContext } from 'react'

const SearchBar = () => {
    const {search,setSearch, showSearch,setshowSearch}=useContext(ShopContext);
  return  showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div>
        
      </div>
      
    </div>
  ) : null
}

export default SearchBar
