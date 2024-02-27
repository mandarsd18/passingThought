import React, { useEffect, useState } from "react";
import List from "./List";

import axios from "axios";

const Main = () => {
  const [thought, setThoght] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const[uiUpdate,setUiUpdate]=useState(false);
  const [updateId,setUpdateId]=useState(null)
  const [error,setError]=useState("")

  const addThoughts = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/thoughts", {
        title: title,
        author: author,
        desc: desc,
      })
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setAuthor("");
        setDesc("");
        setUiUpdate((prevState)=>!prevState)
        setError("")
      }).catch(()=>{
        setError("Every Field is required !!")
      })
  };

  const updateMode=(id ,title,author,desc)=>{
    console.log(title);
    setTitle(title);
    setAuthor(author);
    setDesc(desc)
    setUpdateId(id)
  }

  const updateThoughts=(e)=>{
    e.preventDefault();
    axios.patch(`http://localhost:4000/api/thoughts/${updateId}`,{
      title:title,
      author:author,
      desc:desc 
    }).then((res)=>{
      console.log(res.date)
      setUiUpdate((prevState)=>!prevState)
      setUpdateId(null)
      setTitle("");
      setAuthor("");
      setDesc("");
    })

  }
  
 useEffect(() => {
   axios
      .get("http://localhost:4000/api/thoughts")
      .then((res) => setThoght(res.data));
  }, [uiUpdate]);
  return (
    <>
      <div className=" bg-blue-50 min-h-[91vh] z-10">
        <div className="w-[90%] md:w-[80%] mx-auto flex gap-4 md:flex-nowrap flex-wrap-reverse">
          <div className="flex flex-col w-full md:w-[65%]">
            {thought.map((item) => (
              <List
                key={item._id}
                id={item._id}
                title={item.title}
                author={item.author}
                desc={item.desc}
                updatedAt={item.updatedAt}
                setUiUpdate={setUiUpdate}
                updateMode={updateMode}
              />
            ))}

          </div>
          <div className="w-full md:w-[35%] mt-4 p-2 sm:p-4 bg-white shadow-sm rounded-sm h-fit block md:sticky top-20 right-0">
          
            <form>
              <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-3 cursor-pointer" for="title">
                Enter the title :
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
                placeholder="Something "
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />

              <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-2 sm:mt-3 cursor-pointer" for="author">
                Enter the Author name :
              </label>
              <input
                type="text"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
                placeholder="John"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />

              <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-2 sm:mt-3 cursor-pointer" for='desc'>
                Enter the Description :
              </label>
              <textarea
                type="text"
                id="desc"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
                placeholder="Something description"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                required
               
              />
              <button
                className="py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm rounded-sm bg-blue-600 text-white font-semibold border border-2 border-blue-600 hover:bg-blue-700 mt-2 sm:mt-5"
                onClick={updateId ? updateThoughts : addThoughts}
              >
                {updateId ? "Update Thoughts" : "Add Thoughts"}
              </button>
              {
                error ? <div className="mt-3 sm:mt-4 border border-2 border-red-500 bg-red-200 rounded-md p-3"><p className="text-sm font-semibold text-red-600">{error}</p></div>:""
              }
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
