import React from 'react'
import Card from './Card'
import { useRef } from 'react';


function Foreground() {
   
    const ref = useRef(null);

    const data =[{
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:true,
        tag:
        {
        isOpen:true,
        tagStatus:"Download Now",
        tagColor:"green"
        },
        
    },
    {
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:false,
        tag:
        {
        isOpen:false,
        tagStatus:"Download Now",
        tagColor:"blue"
        },
        
    },
    {
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:true,
        tag:
        {
        isOpen:true,
        tagStatus:"upload",
        tagColor:"blue"
        },
        
    },
    {
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:true,
        tag:
        {
        isOpen:true,
        tagStatus:"Download Now",
        tagColor:"green"
        },
        
    }



]
  return (
    <div className='w-full h-full top-0 left-0 fixed  z-[3] p-5 flex flex-wrap gap-10'>
      {data.map((item,index)=>(  <Card key={index} data={item}  reference={ref}  />))}
    </div>
  )
}

export default Foreground