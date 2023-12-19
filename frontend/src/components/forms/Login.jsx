import React, { useEffect, useState }  from 'react'
import {validEmail,validPassword} from './regex'
const Login = (prop) => {
    const [data,setData]=useState({
        email:"",
        password:"",
    });
    
    const [errors,setErrors]=useState({
        email:false,
        password:false
    })
    const validateEmail=(e)=>{
        if (!validEmail.test(e.target.value)) {
            setErrors({
                ...errors,
                email:true
            })
         }
         else{
            setErrors({
                ...errors,
                email:false
            })
         }
        setData(
            {   
                ...data,
                email:e.target.value
            }
        );
    }
    const validatePassword=async (e)=>{
        
        if (!validPassword.test(e.target.value)) {
            setErrors({
                ...errors,
                password:true
            })
         }
         else{
            setErrors({
                ...errors,
                password:false
            })
         }
        setData(
            {   
                ...data,
                password:e.target.value
            }
        );
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
    
    }
    const switchFormPage=()=>{
        prop.set(true);
    }
    return (
        <>
        <div className='flex justify-center py-2'><h1 className=' text-2xl text-yellow-400 font-extrabold '>LOGIN</h1></div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Email</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="email" name="email" placeholder='eg. satya@gmail.com' value={data.email} onChange={validateEmail} required/>
                {errors.email&&<p className=' font-semibold text-xs text-red-800'>Invalid Email</p>}
            </div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Password</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="password" name="password" placeholder="Enter your password" value={data.password} onChange={validatePassword} required/>
                {errors.password&&<p className=' font-semibold text-xs text-red-800'>Invalid password</p>}
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <button className=' px-3 hover:bg-yellow-600 hover:text-white py-1 text-yellow-400 font-bold text-lg border-2 border-yellow-400 rounded-lg mt-5 mb=1' type="submit" onClick={handleSubmit}>LOGIN</button>
            </div>
            <div className='flex flex-row justify-center items-center font-semibold text-yellow-400 mb-2 mt-1'>
                <p>Don't have an account? </p>
                <button onClick={()=>switchFormPage()} type='button' className='font-bold text-violet-900 underline pl-1'>Register</button>
            </div>
        </>
    )
}

export default Login
