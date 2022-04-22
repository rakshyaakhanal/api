import React from 'react';
import useFetch from './useFetch';

const Api = () => {
    const {data, loading, error} = useFetch('https://v2.jokeapi.dev/joke/Any');


    if(loading) {
        return <h1>LOADING...</h1>
    }

    if(error) {
       console.log(error);
    }

    return (
        <div className='api'>
            <h1>{data?.setup} : {data?.delivery} : {data?.id}</h1>
        </div>
    )
}

export default Api;
