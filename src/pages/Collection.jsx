import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
const Collection = () => {
  const {products} = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options  */}
       <div className="min-w-60">
        <p className='my-2 text-xl flex text-center cursor-pointer gap-2'>FILTERS</p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
             <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Men'} />
                Men
              </p>
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Women'} />
                Women
              </p>
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Kids'} />
               Kids
              </p>
             </div>
        </div>
        {/* SubCategory Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium ">TYPE</p>
             <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Men'} />
                Men
              </p>
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Women'} />
                Women
              </p>
              <p className="flex gap-2">
                <input className='w-3' type="checkbox" value={'Kids'} />
               Kids
              </p>
             </div>
        </div>
       </div>
    </div>
  )
}

export default Collection
