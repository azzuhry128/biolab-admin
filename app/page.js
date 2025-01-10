"use client"

import axios from "axios";
import { useState } from "react";

export default function Register() {
  const localLoginURL = "http://localhost:3000/hospital/account/create";
  
  const [hospitalNameValue, setHospitalName] = useState("");
  const [hospitalEmailValue, setHospitalEmail] = useState("");
  const [hospitalPasswordValue, setHospitalPassword] = useState("");

  const labels = [
    {label: "hospital name", inputvalue: hospitalNameValue},
    {label: "email address", inputvalue: hospitalEmailValue},
    {label: "password", inputvalue: hospitalPasswordValue},
  ]

  console.log("hello world")

  const handleRegister = async () => {
    const result = await axios({
      method: "post",
      url: localLoginURL,
      responseType: "stream",
      data: {
        hospitalName: hospitalNameValue,
        hospitalEmail: hospitalEmailValue,
        hospitalPassword: hospitalPasswordValue,
        hospitalLongitude: "34.0522",
        hospitalLatitude: "-118.2437",
      },
    });

    if (result.status != 200) {
      console.log("login error");
    }

    console.log(result.data);

    // console.log(hospitalNameValue)
    // console.log(hospitalEmailValue)
    // console.log(hospitalPasswordValue)
  };

  const handleHospitalNameChange = (event) => {
    setHospitalName(event.target.value);
  }

  const handleHospitalEmailChange = (event) => {
    setHospitalEmail(event.target.value);
  }

  const handleHospitalPasswordChange = (event) => {
    setHospitalPassword(event.target.value);
  }

  return <div className="flex flex-col w-full h-screen justify-center items-center">
    <div className=" border-2 border-slate-900 rounded-md p-12">
      <div className="flex w-72 flex-col">
          <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">{labels[0].label}</label>
          <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12 p-2" value={labels[0].inputvalue} onChange={handleHospitalNameChange}/>
        </div>

        <div className="flex w-72 flex-col">
          <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">{labels[1].label}</label>
          <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12 p-2" value={labels[1].inputvalue} onChange={handleHospitalEmailChange}/>
        </div>

        <div className="flex w-72 flex-col">
          <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">{labels[2].label}</label>
          <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12 p-2" value={labels[2].inputvalue} onChange={handleHospitalPasswordChange}/>
        </div>
      <a className="capitalize font-medium mt-2" href="/login">already have account? Login</a>
      <div className="w-full flex justify-end">
        <button className="bg-slate-900 w-24 text-white rounded-md mt-12 p-2" onClick={handleRegister}>Register</button>
      </div>
    </div>
</div>

}
