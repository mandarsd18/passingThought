import axios from "axios";
import React from "react";
import { AiFillDelete ,AiFillEdit } from "react-icons/ai";
import { formatISO9075 } from 'date-fns'

import {Link} from "react-router-dom"


const List = ({id,title,desc,author,updatedAt,setUiUpdate,updateMode}) => {

  const deleteThoughts=()=>{
    axios.delete(`https://passingthought-backend.onrender.com/api/thoughts/${id}`).then((res)=>{
      console.log(res);
      setUiUpdate((prevState)=>!prevState);
    })

  }

  return (
    <>
      <div className="w-[100%] shadow-sm rounded-sm bg-white p-3 sm:p-5 flex flex-col break-words mt-1 mb-1  sm:mt-3 sm:mb-2 h-fit">
      <Link to={`/thoughts/${id}`}>

        <h1 className=" text-lg font-bold sm:text-xl md:text-2xl">
          {title}
        </h1>
        <p className=" text-xs sm:text-sm text-gray-400 font-semibold">
          -{author}
        </p>
        <p className="mt-1 sm:mb-1.5 mb-1 text-sm font-bold">
         {desc.length>150?desc.slice(0,100)+"...":desc}
        </p>
      </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs font-semibold text-gray-400">{updatedAt}</p>

        
          <div className="flex gap-2">
          <AiFillEdit className="text-lg text-gray-500 font-bold cursor-pointer sm:text-[22px] hover:text-gray-600" onClick={()=>updateMode(id,title,author,desc)} />
          <AiFillDelete className="text-lg sm:text-[22px] text-gray-500 font-bold cursor-pointer hover:text-gray-600" onClick={deleteThoughts} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default List;
