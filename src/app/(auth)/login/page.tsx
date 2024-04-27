'use client'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import email from 'next-auth/providers/email';
import style from './style.module.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import {Link} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

type ValuesType = {
    email: string;
    password1: string;
}
// validatationSchema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password1: Yup.string().required("Password is Required"),
})

const initialValues:ValuesType = {
     email:'',
     password1:'',
     
}
export default function Login() {
  
   // extracting data from usesession as session
  const { data: session } = useSession()

  const [showPassword,setShowPassword] = useState(false);
  const hanleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  // checking if sessions exists
  if (session) {
  // rendering components for logged in users
  return (
    <div className="">
      <div className="w-44 h-44 relative mb-4">
      <Image src={session.user?.image as string} fill alt="" className="object-cover rounded-full"/></div>
      <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
      <p className="font-bold mb-4">{session.user?.email}</p>
      <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button></div>) 
    }
  return (
    <main className={`${style.container}`}>
    <div className='bg-[#e7e5e4]  rounded-lg w-96 p-12'>
    <Formik  
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values,action)=>{
            console.log(values);
          }}  
    >
      <Form>
        <h1 className={`${style.title}`}>Login</h1>
        {/* email part  */}
        <div className='mb-5'>
           <label htmlFor="email"className={`${style.lable}`}>Your Email</label>
           <Field type="email" name="email" id="email" className={`${style.input}`} />
           <ErrorMessage 
               name="email"
               component="div"
               className={`${style.error}`}
           />
        </div>
        {/* password 1 */}
        <div className='mb-5'>
           <label htmlFor="password1"className={`${style.lable}`}>Password</label>
           <div className='relative'>
              <Field 
              type={showPassword? "text":"password"}
               name="password1"
               id="password1"
               className={`${style.input}`} />
               {/* hide and show pasword */}
              {!showPassword ? <FaEyeSlash
                 onClick={() => hanleShowPassword()} 
                 className="absolute right-2 top-3 text-lg cusor-pointer "/>
              :
              <FaEye 
                onClick={() => hanleShowPassword()}   
                className="absolute right-2 top-3 text-lg cusor-pointer "/>
              }
           </div>
           <ErrorMessage 
               name="password1"
               component="div"
               className={`${style.error}`}
           />
        </div>
        {/* button */}
        <button type="submit" className={`${style.button}`}>
         Login
        </button>
      </Form>
    </Formik>

    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl mb-4"></p>
      <button className="w-full mb-4 flex gap-4 items-center bg-blue-600 py-2 px-6 rounded-md text-white " onClick={() => signIn('google')}><FaGoogle />Sign in with google</button>
      <button className="w-full mb-4 flex gap-4 items-center bg-none border-gray-300 border py-2 px-6 rounded-md " onClick={() => signIn('github')}> <FaGithub /> Sign in with github</button>
    </div>
   <p className="my-4">Don't have an account?
        <span className="font-bold">
          <Link href="/register">Sign up for free</Link>
        </span>
   </p>

  </div>
  </main>
  )
 }


