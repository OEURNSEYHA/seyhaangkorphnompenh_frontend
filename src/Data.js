import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "./ApiRequest";

function Data() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  console.log(token);
  const handleLogout = async () => {
    try {
      // Send a request to the logout endpoint to invalidate the token
      await axios.post(`http://localhost:8080/user/logout`);
      // Remove the token from client storage
      // You should also navigate the user to a logout or login page.
      navigate("/login");
      
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const response = await ApiRequest(
    "GET",
    "http://localhost:8080/users",
    null,
    ""
  )

  useEffect(()=>{
    
  },[]);

  const datas = async () => {
    try {
      const datas = await ApiRequest("GET", "/users", null, token);
      // Now 'datas' contains the data from the API response
      datas.map((item) => console.log(item.email));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return datas;
  }, []);
  return (
    <div>
      {console.log(data)}
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}

export default Data;
