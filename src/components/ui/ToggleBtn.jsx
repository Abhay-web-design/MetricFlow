import React, { useState } from 'react'

const ToggleBtn = () => {
    const [BtnToggle, setBtnToggle] = useState("right-0");
  const [Toggle, setToggle] = useState(true);
  return (
     <div onClick={()=>{
        if(BtnToggle === "right-0"){
          setBtnToggle(" ")
          setToggle(false)
        }
        else{
          setBtnToggle("right-0")
          setToggle(true)
        }
       }} className={`relative w-15 h-8 rounded-3xl ${(Toggle)?"bg-blue-500":"bg-[#081e4e]"}`}>
        <p className={`absolute ${BtnToggle} w-8 h-full rounded-4xl bg-white`}></p>
       </div>
  )
}

export default ToggleBtn