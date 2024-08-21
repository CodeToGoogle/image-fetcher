import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import  PhotoFrame  from './PhotoFrame';
import axios from 'axios';

const App = () => {
    const [photoData,setPhotoData]=useState(null);
    const [error, setError]=useState(false);
    const [loading, setLoading]=useState(null);

    const handleChange=async(e)=>{
        const id=e.target.value;
        if (!id || isNaN(id)) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
            console.log("entered here");
            
            setPhotoData(response.data);
        } catch (err) {
            setError('An error occurred while fetching the data');
        }

        setLoading(false);
        
    };
    
    
    return(
        <div className='App'>
            <input
            type='number'
            placeholder='Enter a number'
            onChange={handleChange}
            />
             {loading && Loader }
            {error && <div>{error}</div>}
            {photoData && !loading && <PhotoFrame url={photoData.url} title={photoData.title} />}

        </div>

    );
  
}


export default App; 