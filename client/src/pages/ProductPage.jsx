import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const ProductPage = () => {
    const params = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(()=>{

        const fetchProduct = async ()=>{

        }

        fetchProduct();

    },[]);

  return (
    <div>ProductPage</div>
  )
}
