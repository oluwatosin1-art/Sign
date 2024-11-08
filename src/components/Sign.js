import React, {useState} from "react";

import Login from "../components/Login";

import treesImg from '../assests/trees.jpeg'

import renewImg from '../assests/renew.jpeg'

import pageImg from '../assests/page.png'

import iconImg from '../assests/icon.png'

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Link } from "react-router-dom";


const Sign = () => {

  const [open, setOpen] = useState(false)

  // handle toogle
  const toogle = () => {
    setOpen(!open)
  }
  const [changeColor, setChangecolor] = useState(false)
  //function for handleclick
  const handleClick = () => {
    setChangecolor(!changeColor)
  }
    return(
        <div className="flex h-screen">
        <img className="hidden lg:block w-1/2" src={treesImg} alt="" />
        <div className="max-w-[960px] bg-white grid-flow-col flex flex-col justify-center items-center w-full lg:w-1/2">
          <div>
            <div className="text-3xl text-center font-bold lg:text-left flex space-x-1 ">
              <img className="bg-left-top h-10" src={renewImg} alt="">
              </img>
              <img className="bg-left-top h-10" src={pageImg} alt=""></img>
            </div>
            <div className="text-3xl text-center font-bold lg:text-left"><h2>Get Started!</h2></div>
  
            <form action="" className="mt-8 w-[80%] lg:w-96 mx-auto space-y-4">
             <div className="w-full my-2 font-semibold bg-white border border-black/4 rounded-md p-4 text center flex items-center justify-center">
             <a href="https://www.google.com.ng"> <img src={iconImg} className="h-6 mr-2" alt=""></img></a>
            
             </div>
             <div className="w-full flex items-center justify-center relative py-1">
              <div className="w-full h-[1px] bg-slate-300"></div>
              <p className="text-lg absolute text-black/50 bg-[#f5f5f5] font-semibold">OR</p>
             </div>
             <div>
              <label for="" className="text-lg text-black">Email Address</label>
              <input className="border w-96 px-4 py-2 rounded-full" name="Email" type="Email Address" placeholder="Enter your email address" />
            </div>
            <div>
              <label for="" className="text-lg text-black">Password</label>
              <div className="relative">
                <input className="border w-96 px-4  py-2 rounded-full" name="Password" type={(open === false) ? 'password' : 'text'} placeholder="Enter your password">
                </input>
                <div className="text-2xl absolute top-4 right-5">
                  {
                    (open === false) ? <AiFillEye onClick={toogle} /> :
                      <AiFillEyeInvisible onClick={toogle} />
                  }

                </div>
              </div>
            </div>
           <div className="w-full">
          <p className="text-sm font-normal text-black">Already had an account?<span className="font-semibold underline underline-offset-2 cursor-pointer text-blue-800"><Link to="/Login" element={<Login />} >Log in</Link></span></p>
           </div>
           <button onClick={handleClick} className={`w-full border-solid border-2 border-green-200  rounded-xl py-2 font-semibold text-green-500 ${(changeColor === true) ? 'bg-green-800 text-white' : 'bg-white'}`}>SIGN IN</button>

            
             
             
             
             
             
             
             
             </form>
             
                </div>
                </div>
                </div>
    );
};
export default Sign;