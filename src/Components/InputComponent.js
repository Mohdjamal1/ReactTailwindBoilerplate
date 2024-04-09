import React from "react";
import { Link } from "react-router-dom";

const InputComponent = ({labelTxt,state,setState,type})=>{

  return(
    <>
        <label className="text-gray-500">{labelTxt}</label>
        <input
          type={type}
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 disabled:cursor-not-allowed disabled:opacity-50"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
    </>
  )
}

 const MyLink = (props)=>{
    return(
        <>
            <Link to="/terms" className="text-black underline">{props.txt}</Link>
        </>
    )
}
export {MyLink,InputComponent};
