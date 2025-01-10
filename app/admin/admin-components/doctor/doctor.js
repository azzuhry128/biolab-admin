import { doctors } from '@/app/database/dummy';
import { GlobalStateContext } from '@/app/store/state';
import { useContext, useEffect, useState } from 'react';

const axios = require('axios');
const AddDoctors = () => {
    const {hospitalIDState} = useContext(GlobalStateContext);
    const {tokenState} = useContext(GlobalStateContext);
    const {doctorState, setDoctorState} = useContext(GlobalStateContext)
    const [doctorNameValue, setDoctorNameValue] = useState('');
    const [doctorEmailValue, setDoctorEmailValue] = useState('');
    const [doctorPasswordValue, setDoctorPasswordValue] = useState(''); 

    useEffect(() => {
      console.log('doctor state has changed', doctorState)
    })

    const doctorNameHandler = (event) => {
      setDoctorNameValue(event.target.value)
    }

    const doctorEmailHandler = (event) => {
      setDoctorEmailValue(event.target.value)
    }

    const doctorPasswordHandler = (event) => {
      setDoctorPasswordValue(event.target.value)
    }

    const addDoctorsHandler = async() => {
      console.log(tokenState);
      const result = await axios({
        method: "post",
        url: `http://localhost:3000/hospital/doctor/create/`,
        responseType: "json",
        headers: {
          'Authorization': `Bearer ${tokenState}`,
        },
        data: {
            hospitalID: hospitalIDState,
            doctorName: doctorNameValue,
            doctorEmail: doctorEmailValue,
            doctorPassword: doctorPasswordValue
        },
      })

      setDoctorState([...doctorState, result.data.doctorData[0]]);
    }

    return (
      <div className="flex flex-col p-8 my-8 bg-white rounded-md">
        <h1 className="capitalize text-2xl font-medium text-navy">Add Doctors</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col">
            <label>Name</label>
            <input id="name" type="text" className="bg-slate-200 p-2 rounded-md" value={doctorNameValue} onChange={doctorNameHandler}/>
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input id="password" type="password" className="bg-slate-200 p-2 rounded-md" value={doctorPasswordValue} onChange={doctorPasswordHandler}/>
          </div>

          <div className="flex flex-col justify-end row-span-2">
            <button type="submit" className=" bg-navy p-2 rounded-md text-white capitalize font-medium text-lg" onClick={addDoctorsHandler}>Submit</button>
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input id="email" type="email" className="bg-slate-200 p-2 rounded-md" value={doctorEmailValue} onChange={doctorEmailHandler}/>
          </div>
        </div>
      </div>

  );
}

export default AddDoctors