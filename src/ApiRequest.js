// api.js
import axios from 'axios';
import { url } from './config';
console.log(url)
const BASE_URL = url;

export async function ApiRequest(method, endpoint, data = null, token) {
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'Cookie': `accessToken=${token}`,
        // Add any other headers you need
      },
      withCredentials: true, // This is important for sending cookies
    });

    let response;

    if (method === 'GET') {
      response = await axiosInstance.get(endpoint);
    } else if (method === 'POST') {
      response = await axiosInstance.post(endpoint, data);
    } else if (method === 'PUT') {
      response = await axiosInstance.put(endpoint, data);
    } else if (method === 'DELETE') {
      response = await axiosInstance.delete(endpoint);
    } else {
      throw new Error('Unsupported HTTP method');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// export async function fetchApiData(method, endpoint, data = null) {
//     try {
//       const options = {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any other headers you need
//         },
//         body: data ? JSON.stringify(data) : undefined,
//       };
  
//       const response = await fetch(`${BASE_URL}/${endpoint}`, options);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const responseData = await response.json();
//       return responseData;
//     } catch (error) {
//       throw error;
//     }
//   }