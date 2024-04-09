import React from "react";
import SelectComponent from "./SelectComponent";
import {useNavigate} from "react-router-dom";

function UserForm() {

  const navigate = useNavigate();

  const handleUserForm = (e)=>{
    e.preventDefault();
    alert("Your Response is recorded");
    navigate('/');
  }

  const handleChange = (e)=>{
    console.log(e.target.value);
  }

  return (
    <div className="flex flex-col items-center form-div">
      
      <h2 className="text-3xl my-5">Tell us a little more about yourself</h2>
      <p className="my-2 text-gray-900 font-medium">
        Your answers will help us build an experience to match your needs.
      </p>
      {/* Form */}
      <form onSubmit={handleUserForm}  className="w-4/12 mt-5">
        <SelectComponent
          labletxt="Do you currently run an online business?"
          handleChange={handleChange}
          required={true}
          myArr={[
            { optionTxt: "Yes", optionValue: "Yes" },
            { optionTxt: "No, just exploring!", optionValue: "No" },
          ]}
        />
        <SelectComponent
          labletxt="I primarily identify as a:"
          handleChange={handleChange}
          required={true}
          myArr={[
            { optionTxt: "Freelancer or Consultant (project-based work)", optionValue: "Freelancer" },
            { optionTxt: "Employee", optionValue: "employee" },
          ]}
        />
        <SelectComponent
          labletxt="Are you already teaching or offering content online?"
          handleChange={handleChange}
          required={true}
          myArr={[
            { optionTxt: "Yes", optionValue: "Yes" },
            { optionTxt: "No, I'm just getting started sharing my knowledge", optionValue: "No" },
          ]}
        />
        <SelectComponent
          labletxt="How big is your current audience(email list, social media followers, subscribers etc.)?"
          handleChange={handleChange}
          myArr={[
            { optionTxt: "1-1,000 people", optionValue: "1-1000" },
            { optionTxt: "1,000-2,000 people", optionValue: "1000-2000" },
            { optionTxt: "2,000-3,000 people", optionValue: "2000-3000" },
            { optionTxt: "More than 4,000 people", optionValue: ">4000" },
          ]}
        />
        <SelectComponent
          labletxt="Which topic is most relevent to your business or content?"
          handleChange={handleChange}
          required={true}
          myArr={[
            { optionTxt: "Photo & Video", optionValue: "Photo & Video" },
            { optionTxt: "Notes", optionValue: "Notes" },
            { optionTxt: "Pdf", optionValue: "Pdf" },
          ]}
        />
        <SelectComponent
          labletxt="Approximately how much money do you make charging for your knowledge today(in courses, consulting, books,speaking, etc.)? We ask this so that we can provide you with relevent resources for the size and stage of your business."
          handleChange={handleChange}
          required={true}
          myArr={[
            { optionTxt: "1000", optionValue: "1000" },
            { optionTxt: "1000-2000", optionValue: "1000-2000" },
            { optionTxt: "2000-3000", optionValue: "2000-3000" },
            { optionTxt: "3000-4000", optionValue: "3000-4000" },
            { optionTxt: ">4000", optionValue: ">4000" },
            { optionTxt: "I prefer not to answer", optionValue: "No" },
          ]}
        />
        <label
          htmlFor="small"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          What are you hoping to do first on Teachable? (Select upto 3 to get
          started as quickly as possible)
        </label>
        <div>
          <input
            type="checkbox"
            id="course"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label htmlFor="course" className="text-gray-500">
            Create an online course
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label className="text-gray-500">Create a coaching program</label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label className="text-gray-500">
            Create a digital download(ebook, artical, template,worksheet,etc.)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label className="text-gray-500">Create a community or forum</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label className="text-gray-500">Create a pre-sell</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="w-4 h-4 mr-3 border-2 border-black"
          />
          <label className="text-gray-500">I'm not sure yet</label>
        </div>

        <div className="mb-6">
          <input type="checkbox" className="w-4 h-4 mr-3" />
          <label className="text-gray-500">
            Something else(please tell us more)
          </label>
        </div>
        <SelectComponent
        labletxt="How much content or training material (videos, worksheets,downloads, etc.) have you already prepared?"
        handleChange={handleChange}
        myArr={[
          { optionTxt: "Half", optionValue: "half" },
          { optionTxt: "Full", optionValue: "full" },
          { optionTxt: "None- I'm just getting started", optionValue: "No" },
        ]}
        />
        <button
          type="submit"
          className="rounded-md bg-transparent border border-zinc-600 lg:ml-80 w-1/4 mb-5 py-2 text-sm font-semibold hover:bg-black/80"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default UserForm;
