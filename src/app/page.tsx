"use client"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
export default function Home() {
 // extracting data from usesession as session
 const { data: session } = useSession()
 // checking if sessions exists
 if (session) {
   // rendering components for logged in users
   return (
     <div className="w-full h-screen flex flex-col justify-center items-center">
       <div className="w-44 h-44 relative mb-4">
       <Image src={session.user?.image as string} fill alt="" className="object-cover rounded-full"/></div>
       <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
       <p className="font-bold mb-4">{session.user?.email}</p>
       <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button></div>) }
 return (
   <div className="w-full h-screen flex flex-col justify-center items-center">
       <p className="text-2xl mb-2">Not Signed In</p>
       <button className="flex gap-2 items-center bg-blue-600 py-2 px-6 rounded-md text-white mb-2" onClick={() => signIn('google')}><FaGoogle />Sign in with google</button>
       <button className="flex gap-2 items-center bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}> <FaGithub /> Sign in with github</button>
   </div>
  )
  }

