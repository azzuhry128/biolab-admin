"use client"

import axios from "axios";
import { useState } from "react";
import hospitalStorage from "../database/hospital.localstorage";
import doctorStorage from "../database/doctor.localstorage";
import serviceStorage from "../database/service.localstorage";
import { useRouter } from "next/navigation";

export default function Login() {
  const localLoginURL = "http://localhost:3000/hospital/account/login";
  const localDoctorURL = "http://localhost:3000/doctor/data";
  const localServiceURL = "http://localhost:3000/service/data";
  const localVisitURL = "http://localhost:3000/visit/data"

  const [hospitalEmailValue, setHospitalEmail] = useState("");
  const [hospitalPasswordValue, setHospitalPassword] = useState("");
  
  const router = useRouter();

  const handleLogin = async () => {
    const result = await axios({
      method: "post",
      url: localLoginURL,
      data: {
        hospitalEmail: hospitalEmailValue,
        hospitalPassword: hospitalPasswordValue,
      },
    });

    const data = result.data.hospitalData
    hospitalStorage(data);

    router.push('/admin')
    console.log(result)
  };

  const fetchDoctorData = async (hospitalID, token) => {
    const result = await axios({
      method: "get",
      url: localDoctorURL,
      data: {
        hospitalID: hospitalID,
        token: token,
      },
    });
    return result;
  };

  const fetchServiceData = async (hospitalID, token) => {
    const result = await axios({
      method: "get",
      url: localServiceURL,
      data: {
        hospitalID: hospitalID,
        token: token,
      },
    });
    return result;
  };

  const fetchVisitData = async (hospitalID, token) => {
    const result = await axios({
      method: "post",
      url: localVisitURL,
      data: {
        hospitalID: hospitalID,
        token: token,
      },
    });
    return result;
  };

  const handleLoginEmailChange = (event) => {
    setHospitalEmail(event.target.value);
  }

  const handleLoginPasswordChange = (event) => {
    setHospitalPassword(event.target.value);
  }

  return <div className="flex flex-col w-full h-screen justify-center items-center">
    <div className=" border-2 border-slate-900 rounded-md p-12">
      <div className="flex w-72 flex-col">
        <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">email address</label>
        <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12 p-2" value={hospitalEmailValue} onChange={handleLoginEmailChange}/>
      </div>
      <div className="flex w-72 flex-col">
        <label className="mb-2 text-xs text-black font-semibold size-4 capitalize w-full">password</label>
        <input type="text" className="w-full mb-4 rounded-md bg-gray-200 h-12 p-2" value={hospitalPasswordValue}onChange={handleLoginPasswordChange}/>
      </div>
      <a className="capitalize font-medium mt-2" href="/">dont have account? register</a>
      <div className="w-full flex justify-end">
        <button className="bg-slate-900 w-24 text-white rounded-md mt-12 p-2"onClick={handleLogin}>Login</button>
      </div>
    </div>
</div>

}
