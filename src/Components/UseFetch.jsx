import { useEffect, useState } from "react"

const UseFetch = (url) => {
//creating a variable data
const[data, setData] = useState();

useEffect(() =>{
    fetch(url).then((res) => res.json())
    .then(data => setData(data))
}, []);
return [data]
}

export default UseFetch
