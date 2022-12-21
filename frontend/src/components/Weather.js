import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

const GetCoords = () => {
    let url = 'http://localhost:5000/weather/';
    /*
        useFetch
        could destruture 'err and loading' also
        if (err) do err stuff
        if (loading) show spinning loading thingy
    */
    const { data, triggerFetch } = useFetch();
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [units, setUnits] = useState('');

    const radioChanged = (e) => {
        setUnits(e.target.value);
    }

    //fetch new data when units change
    useEffect(() => {
        url = `${url}${lat}/${lon}/${units}`;
        triggerFetch(url);
    }, [units])

    const getCoordsClick = (e) => {
        navigator.geolocation.watchPosition(p => {
            setLat(p.coords.latitude);
            setLon(p.coords.longitude);
        });
    };

    return (
        <>
            <article>
                <button type='button' onClick={getCoordsClick}>Get Coordinates</button>
                <form>
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
                    <h3>Choose option to fetch weather</h3>
                    <div onChange={radioChanged}>
                        <input type="radio" value="standard" name="units" /> Kelvin
                        <input type="radio" value="metric" name="units" /> Celsius
                        <input type="radio" value="imperial" name="units" /> Fahrenheit
                    </div>
                </form>
            </article>

            <h2>Weather: {data.data?.weather[0].description}</h2>
            <h2>Temp: {data.data?.main.temp} {units === 'standard' ? "K" : units === 'metric' ? "C" : units === 'imperial' ? "F" : ""}</h2>
        </>
    )
}

export default GetCoords