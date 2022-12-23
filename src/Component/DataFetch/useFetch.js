import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    // throw Error('Data is not found')
                    setError(true);
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setData(data);
                setLoading(false)
            }
            )
            .catch(() => {
                setError(true);
                setLoading(false);
            })
    }, [url]);
    return {data, loading, error}
};

export default useFetch;