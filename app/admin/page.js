"use client";

import { useContext, useEffect, useState } from "react";
import Sidebar from "./admin-components/sidebar";
import { AdminPageStateContext, AdminPageStateProvider, GlobalStateContext } from "../store/state";
import AddDoctors from "./admin-components/doctor/doctor";
import DoctorView from "./admin-components/doctor/doctorView";
import { retrieveHospitalData } from "../database/hospital.localstorage";
import { doctors, services, visits } from "../database/dummy";
import AddServices from "./admin-components/service/service";
import ServiceView from "./admin-components/service/serviceView";
import { getAllDoctors } from "../api/doctor.api";
import { getServices } from "../api/service.api";
import axios from "axios";

const datas = [
  {
    name: "Temperature",
    value: "25°C"
  },
  {
    name: "Humidity",
    value: "50%"
  },
  {
    name: "Pressure",
    value: "100 hPa"
  }
]

export default function Admin() {
  const {pageState} = useContext(GlobalStateContext)
  const {hospitalIDState, setHospitalIDState} = useContext(GlobalStateContext)
  const {setDoctorState} = useContext(GlobalStateContext);
  const {setServiceState} = useContext(GlobalStateContext)
  const {setVisitState} = useContext(GlobalStateContext)
  const {tokenState, setTokenState} = useContext(GlobalStateContext)
  const {setCategoryState} = useContext(GlobalStateContext)
  
  useEffect(() => {
    const hospitalData = retrieveHospitalData();
    setHospitalIDState(hospitalData.id);
    setTokenState(hospitalData.token);
  })

  // useEffect(() => {
  //   setVisitState(visits)  
  // })

  useEffect(() => {
    const fetchDoctorData = async() => {
      if (hospitalIDState && typeof hospitalIDState === 'string' && hospitalIDState.trim() !== '') {
        try {
          const result = await axios({
            method: "get",
            url: `http://localhost:3000/hospital/doctor/data/${hospitalIDState}`,
            responseType: "json",
            headers: {
              'Authorization': `Bearer ${tokenState}`,
            }
          })
          setDoctorState(result.data)
        } catch (error) {
          console.log("error fetching doctors")
        }
      }
    }
    fetchDoctorData()
  }, [tokenState,hospitalIDState, setDoctorState])

  useEffect(() => {
    const fetchServiceData = async() => {
      if (hospitalIDState && typeof hospitalIDState === 'string' && hospitalIDState.trim() !== '') {
        try {
          const result = await axios({
            method: "get",
            url: `http://localhost:3000/hospital/service/data/${hospitalIDState}`,
            responseType: "json",
            headers: {
              'Authorization': `Bearer ${tokenState}`,
            }
          })
          setServiceState(result.data)
        } catch (error) {
          console.log("error fetching services")
        }
      }
    }
    fetchServiceData()
  }, [tokenState,hospitalIDState, setServiceState])

  useEffect(() => {
    const fetchCategoryData = async() => {
      if (hospitalIDState && typeof hospitalIDState === 'string' && hospitalIDState.trim() !== '') {
        try {
          const categories = await axios({
            method: "get",
            url: `http://localhost:3000/hospital/category/data`,
            headers: {
              'Authorization': `Bearer ${tokenState}`,
            },
            responseType: "json",
          })
          setCategoryState(categories)
        } catch (error) {
          console.log("error fetching categories")
        }
      }
    }
    fetchCategoryData()
  }, [tokenState])


  function retrieveHospitalData() {
    const data = JSON.parse(localStorage.getItem("HOSPITAL"))

    const object = {
        id: data.id,
        name: data.name,
        email: data.email,
        longitude: data.longitude,
        latitude: data.latitude,
        token: data.token
    }

    return object
  };

  const PageSwitcher = () => {
    switch(pageState) {
      case 0:
        return (
          <>          
            <Telemetry />
            <VisitList/>
          </>
      );
      case 1:
        return (
          <>
            <AddDoctors/>
            <DoctorView/>
          </>
        );
      case 2:
        return (
          <>
            <AddServices/>
            <ServiceView/>
          </>
        );
      default:
        return (
          <>
            <VisitList/>
          </>
        );
    }
  }

  const CurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const dayOfWeek = date.toLocaleString('default', {weekday: 'long'});
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    // return `${day}, ${dayOfWeek} ${month} ${year}`
    return (
      <h3 className="font-bold text-greytext">{`${dayOfWeek}, ${day} ${month} ${year}`}</h3>
    )
  }

  // home menu
  const Telemetry = () => {
    return (
      <ul className="flex justify-between items-center gap-4 py-12">
          {datas.map((data, index) => (
              <li key={index} className="flex flex-col items-center gap-4 font-semibold text-lg bg-white -800 rounded-md w-96 h-52">
                  <h3 className="p-4 text-left font-semibold text-2xl w-full text-navy">{data.name}</h3>
                  <h4 className="text-3xl mt-4 text-navy">{data.value}</h4>
              </li>
          ))}
      </ul>
  );
  }

  const VisitList = () => {
    
    return (
      <div className="flex flex-col flex-1 p-8 rounded-md bg-white overflow-auto">
        <h1 className="text-navy text-2xl font-semibold">Daftar pasien</h1>
          <table className="flex flex-col flex-1 table-auto my-8 w-full overflow-auto">
            <thead>
              <tr className="flex justify-between">
                <th className="capitalize text-navy">nama pasien</th>
                <th className="capitalize text-navy">status</th>
                <th className="capitalize text-navy">tanggal</th>
                <th className="capitalize text-navy">fee</th>
              </tr>
            </thead>
            <tbody className="flex-1 overflow-y-auto">
              {visits.map((data, index) => (
                  <tr key={index} className="flex items-center justify-between text-center border-b border-gray-200 border-t">
                    <td className="flex justify-center gap-2 items-center">
                      <div className="h-12 w-12 bg-navy my-2 rounded-full"/>
                      <h5 className="text-lg font-regular">{data.name}</h5>
                    </td>
                    <td className="text-md font-regular">
                      <h5 className="p-2 rounded-full w-32 bg-navy text-yellow-500 font-medium">{data.status}</h5>
                    </td>
                    <td className="text-lg font-regular text-navy">{data.date}</td>
                    <td className="text-lg font-regular text-navy">{data.fee}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
      </div>
    )
  }
  // settings menu

  return (
      <div className="flex w-full h-screen justify-start items-start">
          <Sidebar/>
          <div className="flex flex-col bg-navy h-screen w-screen py-12 px-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold capitalize text-greytext">Admin Dashboard</h1>
              <CurrentDate/>
            </div>
              <PageSwitcher/>
          </div>
      </div>
  ) 
}
