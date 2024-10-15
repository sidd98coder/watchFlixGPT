import { useDispatch } from "react-redux";
import { fetchData } from "../api";
import { useEffect } from "react";

const useFetchAndStore = (url, action) => {
    const dispatch = useDispatch();
    async function fetchAndUpdateStore(url, action){
        const data = await fetchData(url);
        dispatch(action(data.results));
    };
    fetchAndUpdateStore(url, action);
//   useEffect(()=>{
    
//   },[]);
}
export default useFetchAndStore;