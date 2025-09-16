import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Details() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Submitted Details</h1>
        <div className="details">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
        <Link to="/" className="btn">Go Back</Link>
      </div>
    </div>
  );
}

export default Details;
