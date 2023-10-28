import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshCart } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import axios from 'axios';


const Navbar = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'));

  const currentUser = JSON.parse(localStorage.getItem("token"));
  const cart = useSelector((state) => state.cart.cart);
 
  useEffect(()=>{

    const updateCartFromDB = async ()=>{
       
      try {
        console.log("yaha ghusa");
        const res = await axios.get(`/api/cart/getcart/${token._id}`);

        dispatch(refreshCart(res));
      } catch (error) {
        console.log(error);
      }

    }

    updateCartFromDB();

  },[])

  return (
    <div className="bg-blue-950 p-3 flex justify-between items-center">
        <Link to={'/'}><h1 className='text-xl text-white font-semibold p-5'>E-Commerce</h1></Link>

        <form className="flex items-center">
        <input type="search" className=" focus:border-yellow-300 w-28 sm:w-64  p-2" /> 
        <button className="bg-yellow-400  p-3 "><FaSearch/></button>
        </form>

        <ul className='relative text-white flex gap-6 p-4 items-center'>
            <div className='flex gap-2 items-center'>
            <span className='relative bottom-3 left-10 text-xs font-semibold text-yellow-400 rounded-full bg-red-600 p-1'>{cart.length}</span>
            <li><Link to={'/cart'}><FaShoppingCart className='text-yellow-200 h-7 w-7 '/></Link></li>
            </div>
            <li>{currentUser? <Link to={'/profile'}><img src={currentUser.avatar} className='h-9 w-9 rounded-full object-contain '/></Link>:"signin"}</li>
        </ul>

    </div>
  )
}

export default Navbar