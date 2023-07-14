'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import RoomList from '../components/RoomList';
// import newRequest from '../newRequest';
import RoomList from '@/components/RoomList';
import newRequest from '../newRequest';





// async function getData() {
//   const res = await fetch("https://travel-jpx4.onrender.com/api", {
//     cache: "no-store"
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }



const Page =  () => {

 const [roomx, setRoomx] = useState([]);

  const getRoomInfo = async () => {
    try {
      const res = await newRequest.get('/rooms');
      setRoomx(res.data);
    } catch (error) {
      console.log("something went wrong!!");
    }
  }

  useEffect(async () => {
   await getRoomInfo();
  }, []);

  console.log("the data now::", roomx);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Available Rooms BABA</h1>
      <RoomList rooms={roomx} />
    </div>
  );
};

 

export default Page;
