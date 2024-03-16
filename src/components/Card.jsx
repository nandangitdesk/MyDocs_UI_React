import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,dragRef}) {
  return (
    <motion.div drag dragConstraints={dragRef} whileDrag={{scale:1.2}}  className='flex-shrink relative h-72 w-60 bg-zinc-900/90 rounded-[45px]  overflow-hidden text-white px-5 py-10'>
      <FaRegFileAlt />
      <p className='text-sm font-normal leading-tight mt-7'>{data.desc}</p>
      <div className='footer absolute  bottom-0  w-full left-0 '>
        <div className='flex items-center justify-between mb-3 py-3 px-8'>
       <h5 className='text-sm'>{data.fileSize}</h5>
       <span className='h-7 w-7 rounded-full bg-zinc-600 flex items-center justify-center'>
       {data.close ? <IoClose />  : <LuDownload size="0.7em" color='#fff' /> }
       </span>
        </div>
      {data.tag.isOpen && (
          <div className={`tag  w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
          <h2 className='text-md  '>{data.tag.tagStatus === "upload" ? "Upload " : "Download Now"}</h2>
      </div>
      )}
      </div>
    </ motion.div>
  )
}

export default Card