import React from "react";

const SelectComponent = (props)=>{

  return(
    <>
      <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labletxt}</label>
      <select id="small" class="block w-full p-2 mb-6 text-sm font-medium text-gray-500 border border-black/30 rounded bg-transparent focus:ring-blue-500 focus:border-blue-500">
        <option selected>Please choose an option...</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </>
  )
}

export default SelectComponent;