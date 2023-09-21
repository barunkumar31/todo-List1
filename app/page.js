'use client'

import React, { useState } from 'react'


 

const page = () => {
  
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [mainTask,setMainTask]=useState([])
  let renderTask=<h2>No Task here..</h2>

  
 
  function submitHandler(e){
    e.preventDefault()
   
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
   
     
  }

  function deletehandler(i){
          let copytesk=[...mainTask]
          copytesk.splice(i,1)
          setMainTask(copytesk)
  }

    if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
    return(
      <>
      <li key={i} className='flex items-center text-white justify-between m-5 h-20 bg-black'>
      <div className=' text-white  text-2xl flex  justify-between object-contain' > 
  Task:<h2 className='mr-4 ml-1' >{t.title}</h2>
  Desc:<p>{t.desc}</p>
 
   
    </div> 
    <button  onClick={()=>{deletehandler(i)} } className='bg-white text-red-500 mx-5 h-[40px] w-[100px] font-bold'>Delete</button>
    </li>
    
    </>); 
  });}
  
  


 
  return (
   <>
   <h2 className='bg-black p-5 text-white text-5xl font-bold text-center' >TodoList</h2>

   <form onSubmit={submitHandler}>
    <input type="text"  className='text-2xl   m-5 px-4 py-2   border-zinc-800 ' placeholder="Enter Task here...." value={title} onChange={(e)=>{ setTitle(e.target.value)
    }}/>

    <input type="text"  className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder="Enter Description here...."value={desc} onChange={(e)=>{ setDesc(e.target.value)
   }}/>

    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
   </form>
   <hr />
   <div  >
     <ul  >

     {renderTask}
     </ul>
         
   </div>
   </>
  )
}

export default page
