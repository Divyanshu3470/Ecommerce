import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Products from './Products'
import { data } from '../assets/assets'
import ProductCards from '../components/ProductCards'

function Collection() {
  const [FilterProducts, setFilterProducts] = useState(data);
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])





  const selectedCategory = (e) => {
    let val = e.target.value.toLowerCase();
    setCategory((i) => (i.includes(val) ? i.filter((a) => a != val) : [...i, val]))
  }

  const selectedSubCategory = (e) => {
    let v = e.target.value.toLowerCase()
    setSubCategory((i) => (i.includes(v) ? i.filter((a) => a != v) : [...i, v]))

  }


  useEffect(() => {
    let UpdateProducts = data;

    if (search) {
      UpdateProducts = UpdateProducts.filter((i) => i.name.toLowerCase().includes(search));

    }
    if (category.length > 0) {
      UpdateProducts = UpdateProducts.filter((i) => category.includes(i.category.toLowerCase()));
    }

    if (subCategory.length > 0) {
      UpdateProducts = UpdateProducts.filter((i) => subCategory.includes(i.subCategory.toLowerCase()));
    }


    setFilterProducts(UpdateProducts)
  }, [search, category, subCategory])

  return (
    <div className="w-[85vw] mx-[100px]">
      <hr className='border border-gray w-[85vw] mt-4' />
      <div className="flex flex-col">
        <div className="flex">
          <div className=" w-[25vw] h-[120px] flex items-end pl-4 pb-4 text-2xl font-sans font-semibold">
            <h2>FILTER</h2>
          </div>
          <div className="w-[75vw] h-[120px] flex justify-between items-end">
            <div className="text-3xl pb-5 pl-3">
              <h1>ALL COLLECTIONS</h1>
            </div>
            <div className="mx-10">
              <select name="" id="" className='py-2 px-4 border-gray-300 border-2 mb-4'>
                <option value="">Sort by: Relevant</option>
                <option value="">Price: High to Low</option>
                <option value="">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[20vw] h-[100vh] flex flex-col gap-[25px]">
            <div className="border-2 px-4 py-2">
              <h2 className='py-2 font-semibold'>CATEGORIES</h2>
              <input onChange={selectedCategory} type="checkbox" name="men" id="men" className='my-2' value='men' />Men <br />
              <input onChange={selectedCategory} type="checkbox" name="women" id="women" className='my-2' value='women' />Women <br />
              <input onChange={selectedCategory} type="checkbox" name="Kids" id="Kids" className='my-2' value='kids' />Kids <br />
            </div>
            <div className="border-2 px-4 py-2">
              <h2 className='py-2'>SEARCH</h2>
              <input onChange={(e) => setSearch(e.target.value.toLowerCase())} className='p-2 w-[250px] border-2 border-gray' type="search" placeholder='Search items' />
            </div>
            <div className="border-2 px-4 py-2">
              <h2 className='py-2 font-semibold'>SUB-CATEGORIES</h2>
              <input onChange={selectedSubCategory} value='topwear' type="checkbox" name="Topwear" id="Topwear" className='my-2' />Topwear <br />
              <input onChange={selectedSubCategory} value='bottomwear' type="checkbox" name="Bottomwear" id="Bottomwear" className='my-2' />Bottomwear <br />
              <input onChange={selectedSubCategory} value='winterwear' type="checkbox" name="Winterwear" id="Winterwear" className='my-2' />Winterwear <br />
            </div>
          </div>
          <div className=" w-[75vw] h-[100vh] grid grid-cols-1 grid-auto-flow-col gap-3 pl-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
              FilterProducts.map((i, index) => (
                <ProductCards key={index} id={i._id} image={i.image} name={i.name} price={i.price} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection