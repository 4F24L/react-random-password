import React from 'react'

const Display = ({Password}) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center py-5 gap-4 pt-10'>
    <div className=' text-xl'>Your Password is :</div>
    <div className=' text-3xl py-1 px-4 border-4 rounded-lg min-h-10 min-w-28'>{Password}</div>
    </div>
  )
}

export default Display