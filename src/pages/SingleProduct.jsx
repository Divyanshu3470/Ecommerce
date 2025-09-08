import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const { productId } = useParams()
    const [found, setFound] = useState()
    const fetchProduct = () => {

    }
    return (
        <div>SingleProduct

            {productId}
        </div>

    )
}

export default SingleProduct