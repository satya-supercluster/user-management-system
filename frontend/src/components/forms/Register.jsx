import React from 'react'

const Register = (prop) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    }
    const switchFormPage=()=>{
        prop.set(false);
    }
    return (
        <>
        <div className='flex justify-center py-2'><h1 className=' text-2xl text-yellow-400 font-extrabold '>REGISTER</h1></div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Name</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="text" name="name" placeholder='eg. Satyam Gupta' required/>
            </div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Email</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="email" name="email" placeholder='eg. abc@gmail.com' required/>
            </div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Password</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div className='flex flex-col flex-wrap '>
                <label className='text-yellow-400 text-base font-semibold px-1 pt-3'>Confirm Password</label>
                <input className='pl-2 border-none outline-none rounded-lg bg-slate-200 p-1 text-slate-700 font-semibold' type="password" name="confirmPassword" placeholder="Re-enter your password" required/>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <button className='my-2 px-3 hover:bg-yellow-600 hover:text-white py-1 text-yellow-400 font-bold text-lg border-2 border-yellow-400 rounded-lg mt-5' type="submit" onClick={handleSubmit}>REGISTER</button>
            </div>
            <div className='flex flex-row justify-center items-center font-semibold text-yellow-400 mb-2'>
                <p>Already have an account? </p>
                <button type='button' onClick={switchFormPage} className='font-bold text-violet-900 underline pl-1'>Login</button>
            </div>
        </>
    )
}

export default Register
