import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicCarousel from "./BasicCarousel";

export const ProductPage = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(productDetails);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);


      const res = await axios.get(`/api/product/${params.id}`);

      setLoading(false);
      setProductDetails(res.data);
    };

    fetchProduct();
  }, []);

  return (
    
    <>
      {loading ? "loading...": 
        <div className="flex flex-col items-center p-5">
        <div className="bg-center">
          {productDetails.images && (
            <img
              src={productDetails.images[0]}
              alt=""
              className="w-52 h-52 rounded-2xl"
            />
          )}
        </div>
        <p className="font-semibold text-3xl text-center my-5">
          {productDetails.name}
        </p>

        <p className="font-semibold text-xl my-3">
          {" "}
          &#8377;{productDetails.price}
        </p>

        <p className="my-8 max-w-xl">{productDetails.description}</p>
        <div className="flex gap-6">
          <button className="bg-yellow-500 text-white p-2 border rounded-xl w-40 uppercase font-semibold">
            buy now
          </button>
          <button className="bg-yellow-500 text-white p-2 border rounded-xl w-40 uppercase font-semibold">
            add to cart
          </button>
        </div>
      </div>
      }; 
      
    </>
  );
};
