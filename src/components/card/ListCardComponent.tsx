'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function CardProducts() {
  return (
      <Card className="row m-3">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold bg-[#db2777] rounded-lg p-2">New</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[200px]"
            src="https://i.pinimg.com/736x/b3/cf/6b/b3cf6b69839e8b2b55cbf3d6024b89a4.jpg"
            width={270}
          />
          <div className='flex m-2'>
            <FaStar className='text-lg text-[#fbbf24]'/>
            <FaStar className='text-lg text-[#fbbf24]'/>
            <FaStar className='text-lg text-[#fbbf24]'/>
            <FaStar className='text-lg text-[#fbbf24]'/>
          </div>
        </CardBody>
        <div className='flex justify-between'>
             <button className='flex items-center text-sm btn bg-[#2563eb]  p-2 rounded-sm text-[#e2e8f0]'>
               <FaCartPlus className='mr-2 text-lg'/> Add To Cart 
            </button>
            <button className='flex items-center text-sm btn bg-[#d1d5db]  p-2 rounded-sm text-[#e2e8f0]'>
               <FaHeart  className='mr-2 text-lg text-[#db2777]'/>
            </button>
          </div>
      </Card>
  );
}
