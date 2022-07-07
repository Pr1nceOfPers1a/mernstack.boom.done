import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[data, setData] = useState(null);
     const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    console.log(res);
                    throw Error('couldnt fetch');
                }
                console.log('res is ok:', res)
                return res.json(); 
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null); 
                
        })
        .catch(err => {
            //.name is the prop on the error
            if (err.name === 'AbortError') {
                // console.log('err')
                console.log('fetch aborted')
            } else {
            setIsPending(false);
            setError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url] );

    return{ data, isPending, error }
}

export default useFetch