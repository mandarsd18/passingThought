import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from 'date-fns'


const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const[error,setError]=useState("")

  const{title,author,desc,updatedAt}=post
  useEffect(() => {
    axios
      .get(`https://passingthought-backend.onrender.com/api/thoughts/${id}`)
      .then((res) => setPost(res?.data))
      .catch((err) => setError(err));
  });

  return <>
{
  !error? <div className="w-[90%] sm:w-[80%] mx-auto mt-6 sm:mt-8">
        <div className="flex flex-col">
            <h1 className="w-full text-center text-xl sm:text-2xl lg:text-3xl font-bold uppercase " >{title}</h1>
           <span className="text-gray-700 font-semibold text-sm mt-4">Author : {author}
           </span>
           <span className="text-gray-700 font-semibold text-sm mt-2">-{updatedAt} </span>
           <p className="mt-4 sm:mt-5 lg:mt-6 text-sm md:text-base text-justify">{desc}
           </p>
            
        </div>
    </div>: <div>{error}</div>
}
    
  </>;
};

export default Detail;
