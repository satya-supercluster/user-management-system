import React from 'react'

const Login = (prop) => {
    const handleSubmit=(e)=>{
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
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="email" name="email" placeholder='eg. abc@gmail.com' required/>
            </div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Password</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <button className='px-3 hover:bg-yellow-600 hover:text-white py-1 text-yellow-400 font-bold text-lg border-2 border-yellow-400 rounded-lg mt-5' type="submit" onClick={handleSubmit}>LOGIN</button>
            </div>
            <div className='flex flex-row justify-center items-center font-semibold text-yellow-400 mb-2'>
                <p>Don't have an account? </p>
                <button onClick={()=>switchFormPage()} type='button' className='font-bold text-violet-900 underline pl-1'>Register</button>
            </div>
        </>
    )
}

export default Login
