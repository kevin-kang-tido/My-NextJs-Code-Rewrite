"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { navbarItem } from './menu';
import { usePathname } from "next/navigation";
// import { signOut, useSession } from "next-auth/react";
import { signOut,useSession } from 'next-auth/react';
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



export default function NavBarComponent() {
  // const pathname = usePathname();
  const { data: session } = useSession();

  const pathname = usePathname();
  if(pathname === "/login" || pathname === "/register"){
    return null
  }

  return (
    <>
     {/* // testing nev */}
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItem.map((item,index:any) => (
          <NavbarItem key={index}>
              <Link
                color="foreground" 
                href={item.path}
                className={`${
                  pathname === item.path && "font-bold text-blue-800"
                }`}
              >
                {item.title}
              </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* search section  */}
        <NavbarItem className='ml-2'>
          <Button as={Link} color="" href="#" variant="flat">
            <FaSearch className='text-2xl text-[#1e293b]'/>
          </Button>
        </NavbarItem>
      {/* cart section */}
      <NavbarItem>
          <Button as={Link} color="" href="#" variant="flat">
            <FaCartPlus className='text-2xl text-[#1e293b]'/>
            <div className=''>
              <sup className='text-[14px] font-bold rounded-full p-[3px]   bg-[#db2777] text-[#f8fafc]'>
                0
              </sup>
            </div>
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          {session ? (
            <div className='flex gap-5'>
             <Image
                src={session.user?.image as string}
                width={40}
                height={40}
                alt=""
                className="object-cover rounded-full"
              />
               <Button
                as={Link}
                onClick={() => signOut()}
                className="bg-gradient-to-r from-blue-500 to-pink-400 text-white"
                // href="/login"
                variant="flat"
              >
                Sign Out
              </Button>
            </div>):(<Button  as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>)
          }
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
             Dashboard
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
    </>
  );
}
