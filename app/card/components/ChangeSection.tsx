import React from 'react'

const ChangeSection = ( {title } : {title : string}) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-[6rem] text-[#EA8C55] font-bold bg-[#540804]">
           {title}
        </div>
  )
}

export default ChangeSection