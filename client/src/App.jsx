import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Details from './Details';
import './App.css';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    navigate('/details');
  };

  // Fetch random images
  useEffect(() => {
    
    const fetchImages = async () => {
      const tempImages = [];
      for (let i = 0; i < 13; i++) {
        // Each request gives a random image
        tempImages.push(`https://picsum.photos/200/300?random=${i}`);
      }
      setImages(tempImages);
    };
    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Enter Your Details</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>

        {/* Horizontal scrollable image list */}
        <div className="image-scroll">
          {images.map((img, index) => (
            <img key={index} src={img} alt="Random" className="scroll-img" />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
