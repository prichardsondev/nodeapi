import { useState, useEffect } from 'react';

export const useFetch = url => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(url);
    useEffect(() => {
        if (url) triggerFetch();
    }, [url]);

    const triggerFetch = async (url) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        } catch (error) {
            setErr(error);
        }
        finally {
            setLoading(false);
        }
    }

    return { data, loading, err, triggerFetch };
}