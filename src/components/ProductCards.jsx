import React from 'react'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

function ProductCards({ image, name, id, price }) {
    return (

        <Link to={`/product/${id}`}>
            <div className="h-[380px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
                <div className='overflow-hidden'>
                    <img className=" h-[250px] w-[100%] transition-transform duration-200 hover:scale-110 cursor-pointer" src={image} alt="product image" />
                </div>
                <div className="pt-4 px-3 pb-5">
                    <div>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </div>
                    <div className="flex items-center justify-between ">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white pt-2">${price}</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default ProductCards