import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "./ApiRequest";

function  Data() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();



  const  handleLogout = async () => {
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
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNTM1ZDhkMTczZDhlMzFjZDdmN2YiLCJlbWFpbCI6InJhdGhhbmFrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC5wNC4zZEJuRU9DN2M2dWRIWDhBRC5uRzFuQ3NIMldyZUxIT0tySld1aGVSTVAzLkllQnR5IiwiaWF0IjoxNjk2OTU3MTU4LCJleHAiOjE2OTc1NjE5NTh9.wqJuqxPOxOTO3XSqDD-j7UbyEPt5aeJ-IhXeeBu30cw';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/users', {
      headers: {
        Cookie: `accessToken=${token}`,
      },
      withCredentials: true,
    });
    setData(response.data);
  } catch (error) {
    // Handle the error
  }
};

  useEffect(() => {
    fetchData();
  }, []);





  return (
    <div>
      {console.log(data)}
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}

export default Data;
