import React, { useEffect, useState } from 'react'
import { icons, data } from '../assets/assets.js'
import ProductCards from '../components/ProductCards.jsx';

function Home() {
    const [FilterProducts, setFilterProducts] = useState(data.slice(0, 10));


   

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="mt-3 flex h-[490px] w-[80vw]  border border-black">
        <div className="w-[100%]">
          <div className="flex flex-col justify-center items-center h-[490px]">
            <div className="flex items-center gap-2">
              <hr className='border-[1.5px] border-black w-12'/>
              <h2 className='text-2xl'>OUR BESTSELLERS</h2>
            </div>
            <div className="">
              <h1 className='text-6xl font-semibold'>Latest Arrivals</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <h2 className='text-2xl'>SHOP NOW</h2>
              <hr className='border-[1.5px] border-black w-12'/>
            </div>
          </div>
        </div>
        <div className="overflow-hidden ">
          <img className='' src={icons.hero_img} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center justify-center mt-14 font-medium">
          <h1 className='text-4xl text-gray-500'>LATEST</h1>
          <h1 className='text-4xl'>COLLECTION</h1>
          <hr className='border border-black w-14'/>
        </div>
        <p className='text-gray-700 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui soluta inventore quae nostrum vitae expedita consectetur</p>

        <div className="w-[75vw] h-[100vh] grid grid-cols-5 grid-auto-flow-col gap-3 pl-8 mt-8">
          {
            FilterProducts.map((i,index)=> (
                <ProductCards key={index} image={i.image} name={i.name} price={i.price}/>
            ))
        }
        </div>
      </div>
      <div className="">
        <div className="flex gap-3 items-center justify-center mt-14 font-medium">
          <h1 className='text-4xl text-gray-500'>BEST</h1>
          <h1 className='text-4xl'>SELLERS</h1>
          <hr className='border border-black w-14'/>
        </div>
        <p className='text-gray-700 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aliquid.</p>
        <div className="w-[75vw] h-[100vh] grid grid-cols-5 grid-auto-flow-col gap-3 pl-8 mt-8">
          {
            FilterProducts.map((i,index)=> (
                <ProductCards key={index} image={i.image} name={i.name} price={i.price}/>
            ))
        }
        </div>
      </div>

    </div>
  )
}

export default Home