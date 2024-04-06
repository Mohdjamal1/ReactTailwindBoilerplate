// Signup.js
import React, { useState } from "react";
import InputComponent,{myLink} from "./InputComponent";
import UserForm from "./UserForm";

function Signup() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      // localStorage.setItem("user", JSON.stringify(user));
      
    } else {
      alert("Please fill all the fields");
      setError("*This field is required");
    }
  };

  return (
    <div className="flex flex-col items-center form-div">
        <h2 className="text-3xl my-5">Get started with Teachable</h2>
      <p className="text-gray-500 my-2">Join more than 100,000 creators who've sold over <span className="text-black">$1billon</span> in courses and coaching</p>
    {/* Form */}
      <form className="mt-7 flex-col" onSubmit={handleSubmit}>
        {/* For Name */}
        <div className="mb-4">
          <InputComponent labelTxt="Full Name" state={fullName} setState={setFullName} type="text" />
          {!fullName && <p className="mt-1 text-xs text-red-500">{Error}</p>}
          
        </div>
        {/* For Email */}
        <div className="mb-4">
          <InputComponent labelTxt="Email" state={email} setState={setEmail} type="email" />
          {!email && <p className="mt-1 text-xs text-red-500">{Error}</p>}
          
        </div>
        {/* For Password */}
        <div className="mb-4">
          <InputComponent labelTxt="Password" state={password} setState={setPassword} type="password" />
          {!password && <p className="mt-1 text-xs text-red-500">{Error}</p>}
          
        </div>
        {/* For Confirm Password */}
        <div className="mb-4">
          <InputComponent labelTxt="Confirm Password" state={confirmPassword} setState={setConfirmPassword} type="password" />
          {!confirmPassword && <p className="mt-1 text-xs text-red-500">{Error}</p>}
        
        </div>
        {/* For checkbox */}
        <div className="mb-4">
          <input type="checkbox" className="w-10 mr-1" required />
          <label className="text-gray-500">I agree to the <myLink txt="Terms of Use" /> and <myLink txt="Privacy Policy" /></label>
        </div>
      </form>
        {/* For Button */}
        <button type="submit" onClick={handleSubmit} className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80">
          Create Account
        </button>
      <p>Already have an account?<a> Log In</a></p>
    </div>
  );
}

export default Signup;
