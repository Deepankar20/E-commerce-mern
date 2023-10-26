import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

export const Login = () => {
  const token = localStorage.getItem("token");
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);

        try {
          const res = await axios
        .post('/api/auth/signin', formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', JSON.stringify(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
        
       
        setFormData({});
        setError(false);
      
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.msg);
    }
        
    }




  return (
    <div className="p-5 mx-auto max-w-lg">
      <h1 className="text-3xl text-center">Log In</h1>
      <form className="flex flex-col gap-4 my-7" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="enter email"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="enter password"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />

        <button className="p-2 border border-black rounded-md text-white bg-yellow-400 hover:bg-yellow-500 font-semibold uppercase">{loading? "logging in...":"log in"}</button>
      </form>

      {error && <span className="text-red-600">{error.msg}</span>}
      <span>dont have an account? <Link to={"/signup"} className="text-blue-500">signup here</Link></span>
    </div>
  );
};
