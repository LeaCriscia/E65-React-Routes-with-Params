import axios from 'axios';
import {useEffect, useState} from 'react';

const Httpaxios = () => {
    //handle error
    //loading of data
    //treatment of data
    const apiReqURL = "https://dummyjson.com/products";
    // console.log(apiReqURL);
    //perform asynchronous inside useEffect
    useEffect(()=>{
        //http request
        axios
        .get(apiReqURL)
        .then((post)=>console.log(post))
        .catch((err)=>console.log(err))
    },[]);

  return (
    <div>Httpfetch</div>
  )
}

export default Httpaxios