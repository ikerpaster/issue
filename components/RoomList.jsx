import Link from 'next/link';
import React from 'react';

const RoomList = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {rooms.map((room) => (
        <div
          key={room._id}
          className="bg-white shadow-md p-4 rounded-md"
        >
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
          <p className="text-gray-500 mb-2 line-clamp-2">{room.description}</p>
          <p className="text-gray-700 mb-4">Price: ${room.price}</p>
          <p className="text-gray-700 mb-4">ID: {room._id}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => handleChatClick(room.agentId)}
          >
            Chat with Owner
          </button>
          <Link href="/messages">Go to messagres </Link>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
