import React from "react"
import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (

    <div className=" w-full max-w-maxContent flex flex-col background items-center ">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 font-medium text-4xl py-2 ">Random Gif</h1>
      
      <div className="  w-[80%] flex flex-col items-center gap-y-10  mt-[30px]   text-center">

          <Random/>
          <Tag/>

      </div>


    </div>
  )
}







// npm install
// npm i axios
// axios ka use krke 'API ' ka use kr sakte hai 