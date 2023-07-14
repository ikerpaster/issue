'use client'
import React from 'react';
import axios from 'axios';
// import RoomList from '../components/RoomList';
// import newRequest from '../newRequest';
import RoomList from '@/components/RoomList';
import newRequest from '../newRequest';

async function getData() {
  const res = await fetch("http://localhost:1337/api/rooms", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}



const Page = async () => {
  const data = await getData();

  console.log("the data now::", data);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Available Rooms</h1>
      <RoomList rooms={data} />
    </div>
  );
};

 

export default Page;
