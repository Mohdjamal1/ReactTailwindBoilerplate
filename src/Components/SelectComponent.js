import React from "react";

const SelectComponent = (props)=>{
  // console.log(props);

  return(
    <>
      <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labletxt}</label>
      <select id="dropdown" required={props.required} onChange={props.handleChange} className="block w-full p-2 mb-6 text-sm font-medium text-gray-500 border border-black/30 rounded bg-transparent focus:ring-blue-500 focus:border-blue-500">
      <option value="" selected>
      Please choose an option...
        </option>
        {props.myArr.map((item,index)=>(
          <option key={index} value={item.optionValue}>{item.optionTxt}</option>
        ))}
      </select>
    </>
  )
}

export default SelectComponent;