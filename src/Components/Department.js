// import React, { useState, useEffect } from 'react';

// const Department = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//             fetch('https://jsonplaceholder.typicode.com/posts')
//             // fetch('https://localhost:44333/_configuration/1')
//             .then(res => res.json())
//             .then(res => setData(res))
//     }, []);


//     return (
//         <>
//         <h3>Result: </h3>
//         {data.map(data => <div><p>{data.id}.{data.title}</p></div>)}
//         {JSON.stringify(data)}
//         </>

//     )
// }
// export default Department;



// import React, { useState } from 'react';
// import Axios from 'axios';

// const Department = () => {
//     const [joke, setJoke] = useState('');

//     const getJoke = () => {
//         // fetch('https://official-joke-api.appspot.com/random_joke')
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then((data) => {
//             setJoke(data.setup + '...' + data.punchline);
//                 })
//     }
//     return(
//         <div>Hello JK
//         {joke}
//         </div>
//     )
// }
// export default Department;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Department = () => {
    const [product, setProduct] = useState(null);
    // const url = 'https://5e8dd95322d8cd006a79b97.mockapi.io/api/v1/products/3';
    const url = 'https://official-joke-api.appspot.com/random_joke';
    // const url = 'https://v2.jokeapi.dev/joke/Any';


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProduct(res.data)
            })
    }, [url])

   if(product) {
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
   }

   return (
    <div>Hlo</div>
)
}
export default Department;