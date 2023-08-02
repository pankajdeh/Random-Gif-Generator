import React from "react"
import {useState} from 'react'
// import axios from "axios";
// import { useEffect } from "react";
import Spinner from './Spinner'
import useGif  from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

//PROCESS.ENV =  .env ko excess kr sakte hai 

export default function Tag() {


// const[gif, setGif] = useState("")
// const[loading, setLoading] = useState('false')

const[tag, setTag] = useState("")

// async function fetchData(){
//   setLoading(true)
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag} `
//  const {data} =  await axios.get(url);
//  const imageSource = data.data.images.downsized_large.url;
//  setGif(imageSource)
//  setLoading(false)

// // console.log(output)

//   // axios - ek promise return krta hai 
// }
// useEffect ( ()=>{
// fetchData()
// }, [] )
 

const {gif, loading , fetchData} = useGif(tag);


function changeHandler(event){
  setTag(event.target.value)
}

  return (
    <div className="  bg-blue-500 w-1/2  rounded-lg  border border-black flex flex-col items-center gap-y-5">

      <h1 className="text-2xl underline uppercase font-bold mt-2 ">  Random {tag} Gif</h1>

    {
      loading ? (<Spinner/>) : (<img src={gif} width='450'/> )
    }


    <input className="w-10/12 rounded-lg text-lg p-1 px-[10px] mb-[3px]  " 
    onChange ={changeHandler}
    value = {tag}
    />
        
{/*  onChange= { (event) =>setTag(event.target.value) } */}

      <button onClick ={ ()=> fetchData(tag) } 
      className=" w-10/12 bg-yellow-500 text-lg rounded-lg mb-[20px] text-center "
      
      > Generate
      </button> 
    </div>
  )
}
