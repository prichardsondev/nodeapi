import React, { useEffect } from 'react'
import axios from 'axios';
const url = "http://localhost:5000/weather/43.85862094380924/-70.37649712393015";
const FetchData = () => {
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            console.log(json.data.weather[0]);
        } catch (error) {
            console.log(error.response);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>AxWrap</div>
    )
}

export default FetchData