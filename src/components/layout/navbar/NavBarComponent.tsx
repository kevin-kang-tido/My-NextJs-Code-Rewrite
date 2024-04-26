import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { navbarItem } from './menu';
import { usePathname } from "next/navigation";

export default function NavBarComponent() {
  // const pathname = usePathname();
  // if(pathname === "/login" || pathname === "/signup"){
  //   return null
  // }

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
                // className={`${
                //   pathname === item.path && "font-bold text-blue-800"
                // }`}
              >
                {item.title}
              </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Button as={link} ><Button/> */}
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
             Dashboard
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  );
}
