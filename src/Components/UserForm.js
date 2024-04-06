import React from "react";
import SelectComponent from "./SelectComponent";

function UserForm(){

  return(
    <div className="flex flex-col items-center form-div">
      <h2 className="text-3xl my-5">Tell us a little more about yourself</h2>
    <p className="my-2 text-gray-900 font-medium">Your answers will help us build an experience to match your needs. </p>
  {/* Form */}
      <form class="w-4/12 mt-5">
      <SelectComponent labletxt="Do you currently run an online business?" />
      <SelectComponent labletxt="I primarily identify as a:"/>
      <SelectComponent labletxt="Are you already teaching or offering content online?"/>
      <SelectComponent labletxt="How big is your current audience(email list, social media followers, subscribers etc.)?"/>
      <SelectComponent labletxt="Which topic is most relevent to your business or content?"/>
      <SelectComponent labletxt="Approximately how much money do you make charging for your knowledge today(in courses, consulting, books,speaking, etc.)? We ask this so that we can provide you with relevent resources for the size and stage of your business."/>
        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What are you hoping to do first on Teachable? (Select upto 3 to get started as quickly as possible)</label>
        <div>
          <input type="checkbox" className="w-10" />
          <label className="text-gray-500">I agree to the terms of Use and Privacy Policy</label>
        </div>
        <div>
          <input type="checkbox" className="w-10" />
          <label className="text-gray-500">I agree to the terms of Use and Privacy Policy</label>
        </div>
        <div className="mb-4">
          <input type="checkbox" className="w-10 border border-red-600 rounded bg-gray-50" />
          <label className="text-gray-500">I agree to the terms of Use and Privacy Policy</label>
        </div>
      <SelectComponent labletxt="How much content or training material (videos, worksheets,downloads, etc.) have you already prepared?"/>
      <button type="submit" className="rounded-md bg-transparent border border-zinc-600 lg:ml-80 w-1/4 mb-5 py-2 text-sm font-semibold hover:bg-black/80">
          Next
      </button>
      </form>
    </div>
  )
}

export default UserForm;