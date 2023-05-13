import React, { useEffect } from 'react'
import { backend_url } from './BackendURL';
import { Navigate, useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  const getData = async () => {
    let res = await fetch(`${backend_url}/home`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    });
    res = await res.json();
    if (res.status == "NO") {
      localStorage.clear();
      navigate('/login');
    }
  };

  if (localStorage.getItem('token') === null ) {
    return <Navigate to="/login" />
  }

  getData();

  return (
    <div>Home</div>
  );
}

export default Home;