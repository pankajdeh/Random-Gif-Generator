import React from "react"
import {useState} from 'react'
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif  from "../hooks/useGif";



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

//PROCESS.ENV =  .env ko excess kr sakte hai 

export default function Random() {


const[gif, setGif] = useState("")
const[loading, setLoading] = useState('false')

async function fetchData(){
  setLoading(true)
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
 const {data} =  await axios.get(url);
 const imageSource = data.data.images.downsized_large.url;
 setGif(imageSource)
 setLoading(false)

// console.log(output)

  // axios - ek promise return krta hai 
}
useEffect ( ()=>{
fetchData()
}, [] )


function clickHandler(){
  fetchData()
}

  return (
    <div className="  bg-green-500 w-1/2  rounded-lg  border border-black flex flex-col items-center gap-y-5">

      <h1 className="text-2xl underline uppercase font-bold mt-2 "> A Random Gif</h1>

    {
      loading ? (<Spinner/>) : (<img src={gif} width='450'  h-fit /> )
    }
      <button onClick ={clickHandler} 
      className=" w-10/12 bg-yellow-500 text-lg rounded-lg mb-[20px] "> Generate
      </button>
    </div>
  )
}
