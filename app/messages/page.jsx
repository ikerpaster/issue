'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const data = [
  {
    "_id": "64a2c037fede916f967b1161",
    "id": "64a268926e865f3afb52c67b64a268316e865f3afb52c65f",
    "agentId": "64a268926e865f3afb52c67b",
    "clientId": "64a268316e865f3afb52c65f",
    "readByAgent": false,
    "readByClient": true,
    "createdAt": "2023-07-03T12:34:00.617Z",
    "updatedAt": "2023-07-03T12:34:46.808Z",
    "__v": 0,
    "lastMessage": "hi love nana three"
  },
  {
    "_id": "64a2bcaffede916f967b110a",
    "id": "64a268886e865f3afb52c67764a268316e865f3afb52c65f",
    "agentId": "64a268886e865f3afb52c677",
    "clientId": "64a268316e865f3afb52c65f",
    "readByAgent": false,
    "readByClient": true,
    "createdAt": "2023-07-03T12:18:56.284Z",
    "updatedAt": "2023-07-03T12:23:36.495Z",
    "__v": 0,
    "lastMessage": "final love"
  },
  {
    "_id": "64a2bba6fede916f967b10f9",
    "id": "64a2687c6e865f3afb52c67364a268316e865f3afb52c65f",
    "agentId": "64a2687c6e865f3afb52c673",
    "clientId": "64a268316e865f3afb52c65f",
    "readByAgent": false,
    "readByClient": true,
    "createdAt": "2023-07-03T12:14:31.590Z",
    "updatedAt": "2023-07-03T12:20:26.005Z",
    "__v": 0,
    "lastMessage": "salama  ok ok last"
  }
];

const Page = () => {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    setConversation(data);
  }, []);

 
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Available convs</h1>
      {/* <ul className="space-y-6">
        {conversation?.map((conv) => (
          <li key={conv._id} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{conv.lastMessage}</h2>
            <p className="text-gray-500 text-sm mb-4">
              Created At: {new Date(conv.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Updated At: {new Date(conv.updatedAt).toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">
              Agent ID: {conv.agentId}
            </p>
            <p className="text-gray-500 text-sm">
              Client ID: {conv.clientId}
            </p>

            <p className="text-gray-500 text-sm py-5 bg-gray-600 my-5 rounded-lg shadow-md">
             <Link href={`/messages/inbox/${conv.id}`}>Go to the Inbox</Link>
            </p>
          </li>
        ))}
      </ul> */}

<table className="min-w-full divide-y divide-gray-200">
  <tbody className="bg-white divide-y divide-gray-200">
    {conversation?.map((conv) => (
      <tr key={conv._id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <h2 className="text-xl font-semibold mb-2">{conv.lastMessage}</h2>
          <p className="text-gray-500 text-sm mb-4">
            Created At: {new Date(conv.createdAt).toLocaleString()}
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Updated At: {new Date(conv.updatedAt).toLocaleString()}
          </p>
          <p className="text-gray-500 text-sm">
            Agent ID: {conv.agentId}
          </p>
          <p className="text-gray-500 text-sm">
            Client ID: {conv.clientId}
          </p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <p className="text-white text-center font-bold text-lg py-5 bg-blue-600 my-5 rounded-lg shadow-md">
            <Link href={`/messages/inbox/${conv.id}`}>Go to the Inbox</Link>
          </p>
        </td>
        
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

 

export default Page;
