import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="bg-blue-950 flex justify-between items-center">
        <Link to={'/'}><h1 className='text-xl text-white font-semibold p-5'>E-Commerce</h1></Link>

        <form className="">
        <input type="search" className="bg-slate-200 focus:border-yellow-300 w-52 sm:w-64  p-2 rounded-3xl" /> 
        <button className="bg-slate-100 p-3 rounded-3xl"><FaSearch/></button>
        </form>

        <ul className='text-white flex gap-3 p-4'>
            <li>{currentUser? <Link to={'/profile'}><img src={currentUser.avatar} className='h-9 w-9 rounded-full object-contain '/></Link>:"signin"}</li>
        </ul>

    </div>
  )
}

export default Navbar