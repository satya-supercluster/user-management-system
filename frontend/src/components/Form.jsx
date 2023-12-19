import React from 'react'
import Login from './forms/Login';
import { useState } from 'react';
import Register from './forms/Register';
const Form = () => {
  const [formType,setFormType]=useState(false);
  return (
    <>
      <div className=' h-screen w-screen flex justify-center items-center bg-slate-700'>
        <form className="max-[600px]:w-100 md:w-1/2 lg:w-1/3 xl:w-1/4 px-5 py-2 border-4 rounded-lg border-yellow-500 bg-stone-600">
          {((formType)===true)?<Register set={setFormType}/>:<Login set={setFormType}/>}
        </form>
      </div>
    </>
  )
}

export default Form
