import React from 'react'
const handleSubmit=(e)=>{
    e.preventDefault();

}
const Form = () => {
  return (
    <>
      <form className=" w-1/2 px-5 py-2 border-2 rounded-2xl border-blue-500" action="handleSubmit">
        <div className='flex justify-center py-2'><h1 className=' text-2xl text-purple-700 '>Login</h1></div>
        <div className='flex flex-col flex-wrap '>
            <label className=''>Name</label>
            <input type="text" name="name" placeholder='eg. Satyam Gupta'/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" placeholder='eg. abc@gmail.com'/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password"/>
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Re-enter your password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Form
