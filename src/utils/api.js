import { API_OPTIONS } from "./constants";


export const fetchData = async(url) => {
    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();
    return data;
  }