import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the file to a server here
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    axios.post('http://localhost:5000/upload', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Upload</button>
    </form>
  );
};

export default FileUpload;