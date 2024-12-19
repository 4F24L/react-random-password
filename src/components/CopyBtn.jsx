import React, { useState } from 'react'

const CopyBtn = ({password}) => {
  const [copyStatus, setCopyStatus] = useState("Copy Password");
  return (
    <div className=' w-full flex flex-col justify-center items-center gap-4 mt-5'>
    <button className=" bg-yellow-200 px-3 py-2 pb-3 rounded-lg active:bg-yellow-100 outline-none" onClick={()=>{
        if(password){
            navigator.clipboard.writeText(password);
            setCopyStatus("Password Copied ✅");
            setTimeout(()=>{
              setCopyStatus("Copy Password")
            }, 3500)
        } else{
            setCopyStatus("❗Generate Password First❗")
            setTimeout(()=>{
              setCopyStatus("Copy Password")
            }, 2000)
        }
    }}>{copyStatus}</button>

    
    
    </div>
  )
}

export default CopyBtn