import React, { useState, useContext } from 'react'
import { useFetch } from '../hooks/useFetch';

const GetCoords = () => {
    let url = 'http://localhost:5000/weather/';
    //could destruture 'err and isLoading' also
    const { data, triggerFetch } = useFetch();
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        url = `${url}${lat}/${lon}`;
        await triggerFetch(url);
        console.log(data);
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='lat'>Lat : </label>
                        <input type="text" id='lat' name='lat'
                            value={lat}
                            onChange={(e) => setLat(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='lon'>Lon : </label>
                        <input type="text" id='lon' name='lon'
                            value={lon}
                            onChange={(e) => setLon(e.target.value)} />
                    </div>
                    <button type='submit'>Fetch Weather</button>
                </form>
            </article>

            <h2>Weather: {data.data?.weather[0].description}</h2>
            <h2>Temp: {data.data?.main.temp} K</h2>
        </>
    )
}

export default GetCoords