import React, { useEffect, useState } from 'react'
import {validEmail,validPassword} from './regex'
const Register = (prop) => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    const [errors,setErrors]=useState({
        name:false,
        email:false,
        password:false,
        confirmPassword:false
    })
    const validateName=(e)=>{
        if(e.target.value.length<2)
            setErrors({
                ...errors,
                name:true
            })
        else 
            setErrors({
                ...errors,
                name:false
            })
        setData(
        {   
            ...data,
            name:e.target.value
        }
        );
    }
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
    const validateConfirmPassword=(e)=>{
        if ((!validPassword.test(e.target.value))||(data.password!=e.target.value)) {
            setErrors({
                ...errors,
                confirmPassword:true
            })
         }
         else{
            setErrors({
                ...errors,
                confirmPassword:false
            })
         }
        setData(
            {   
                ...data,
                confirmPassword:e.target.value
            } 
        );
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {name,email,password}=data;
        const res = await fetch(
            `http://localhost:8080/api/public/register`,
            {
              method: "POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,email,password
              })
            }
          );
          const d = await res.json();
          console.log(d);
        
    }
    const switchFormPage=()=>{
        prop.set(false);
    }
    return (
        <>
        <div className='flex justify-center py-2'><h1 className=' text-2xl text-yellow-400 font-extrabold '>REGISTER</h1></div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Name</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="text" name="name" placeholder='eg. Satyam Gupta' value={data.name} onChange={validateName} required/>
                {errors.name&&<p className=' font-semibold text-xs text-red-800'>Invalid Name</p>}
            </div>
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
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Confirm Password</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="password" name="confirmPassword" placeholder="Re-enter your password" value={data.confirmPassword} onChange={validateConfirmPassword} required/>
                {errors.confirmPassword&&<p className=' font-semibold text-xs text-red-800'>Passwords are different</p>}
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <button className=' px-3 hover:bg-yellow-600 hover:text-white py-1 text-yellow-400 font-bold text-lg border-2 border-yellow-400 rounded-lg mt-5 mb-1' type="submit" onClick={handleSubmit}>REGISTER</button>
            </div>
            <div className='flex flex-row justify-center items-center font-semibold text-yellow-400 mt-1 mb-2'>
                <p>Already have an account? </p>
                <button type='button' onClick={switchFormPage} className='font-bold text-violet-900 underline pl-1'>Login</button>
            </div>
        </>
    )
}

export default Register
