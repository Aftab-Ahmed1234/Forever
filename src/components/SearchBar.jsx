import React from 'react'
import { useContext } from 'react'

const SearchBar = () => {
    const {search,setSearch, showSearch,setshowSearch}=useContext(ShopContext);
  return  showSearch ? (
    <div className='border-t border-b'>
      
    </div>
  ) : null
}

export default SearchBar
