import {useState,useEffect} from 'react';
import  API_KEY from './key';

const CONTEXT_KEY = "cdfc8c069f5af2e68";

const useGoogleSearch=(term)=> {
    const [data,setdata] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(Response=>Response.json())
            .then(result=>setdata(result));
        }

        fetchData();

    },[term]);

    return {data};
   
}

export default useGoogleSearch;
