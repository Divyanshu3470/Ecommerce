import React, { useEffect, useState } from 'react'
import { data, icons } from '../assets/assets.js'
import ProductCards from '../components/ProductCards.jsx';


function Products() {
    const [FilterProducts, setFilterProducts] = useState(data);
    const [Search, setSearch] = useState('');


    const Searchitem = (e)=> {
      setSearch(e.target.value.toLowerCase())
    }

    useEffect(()=>{
      let UpdateProducts = data;

      if (Search) {
        UpdateProducts = UpdateProducts.filter(i=> i.name.toLowerCase().includes(Search));
      }
    }, [Search])
    
  return (
    <>
        {
            FilterProducts.map((i,index)=> (
                <ProductCards key={index} image={i.image} name={i.name} price={i.price}/>
            ))
        }
  </>
  )
}

export default Products 