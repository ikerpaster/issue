'use client'
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import newRequest from './newRequest';
export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setCurrentUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const currentUserJSON = localStorage.getItem('currentUser');
      if (currentUserJSON) {
        return JSON.parse(currentUserJSON);
      }
    }
    return null;
  });

    const login = async (username, password) => {
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      Cookies.set("currentUser", JSON.stringify(res.data));
      setCurrentUser(res.data);
     
      console.log("user logged in");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err,"Something went wrong. Please try again later.");
      }
    }
  };
  

// get user info 
const [userInfo, setUserInfo] = useState(null);
const getUserInfo = async (userId) => {
  try {
    const response = await newRequest.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const fetchUserInfo = async () => {
  const info = await getUserInfo(currentUser?._id);
  setUserInfo(info);
}

useEffect(() => {
  if (currentUser) {
    fetchUserInfo();
  }
}, []);


console.log("info",currentUser)
  const getdata = async()=>{
    console.log(currentUser._id);
    // const id ='6444089ee4d4d231b4908890';
    try {
      const res = await newRequest.get(`/hotels/myhotels/${currentUser?._id}`);
      console.log("my hotels::: ",res.data)
    } catch (error) {
      console.log(error.res.data);
    }

  }
  
  useEffect(()=>{
    getdata();
  },[]);

 

const postData = async () => {
  try {
    const data = {
      name: "element ele2",
      description: "10 stars",
      images: ["1", "1"],
      country: "UAE",
      state: "dubai",
      city: "Deila",
      zipcode: "0000000"
    };

    const response = await newRequest.post('/hotels/', data);
    console.log(response.data); // Assuming you want to log the response data

  } catch (error) {
    console.error(error);
    console.log(error.response.data); 
  }
};

 


  const logout = () => {
    Cookies.remove('currentUser');
    setCurrentUser(null);
    setUserInfo(null);
  };

  return (
       

       <>
       
           <form
                  className=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    login(username, password);
                  }}
                >
                                                   
                                    <div className="">
                                        <label className="form-label" htmlFor="input-1">
                                            Username or Email address *
                                        </label>
                                        <input 
                                        className="form-control" 
                                        id="input-1" 
                                        type="text" 
                                        required 
                                        name="username" 
                                        placeholder="iker Doe" 
                                        onChange={(e) => setUsername(e.target.value)} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">
                                            Password *
                                        </label>
                                        <input 
                                        className="form-control" 
                                        id="input-4" 
                                        type="password" 
                                        required 
                                        name="password" 
                                        placeholder="************"   
                                        onChange={(e) => setPassword(e.target.value)} 
                                        />
                                    </div>
                                  
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                            Login
                                        </button>
                                        <br /><br /><br /><br /><br /><br /><br /><br />

<button onClick={logout}>logout</button>
<br /><br />
<button onClick={postData}>
  <h1>Post Hotels</h1>
</button>
<h1>
  
  </h1><br /><br />
                                        <button onClick={getdata}>get hotel</button>
                                        {/* {error && error} */}
                                    </div>
                                    
                                </form>
       
       </>
  )
}
