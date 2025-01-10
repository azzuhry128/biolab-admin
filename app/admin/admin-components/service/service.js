import { GlobalStateContext } from "@/app/store/state";
import { useContext, useEffect, useState } from "react";

const axios = require('axios');
const AddServices = () => {
    const {hospitalIDState} = useContext(GlobalStateContext);
    const {tokenState} = useContext(GlobalStateContext);
    const {serviceState, setServiceState} = useContext(GlobalStateContext)
    const [serviceNameValue, setServiceNameValue] = useState('');
    const [serviceCategoryValue, setServiceCategoryValue] = useState('');
    const [serviceDescriptionValue, setServiceDescriptionValue] = useState('');
    const [serviceFeeValue, setServiceFeeValue] = useState('');

    useEffect(() => {
        console.log('hospital id state has changed', hospitalIDState)
    }, [hospitalIDState])


    const serviceNameHandler = (event) => {
        setServiceNameValue(event.target.value)
      }
  
      const serviceCategoryHandler = (event) => {
        setServiceCategoryValue(event.target.value)
      }
  
      const serviceDescriptionHandler = (event) => {
        setServiceDescriptionValue(event.target.value)
      }

      const serviceFeeHandler = (event) => {
        setServiceFeeValue(event.target.value)
      }

    const addServiceHandler = async() => {
      const result = await axios({
        method: "post",
        url: `http://localhost:3000/hospital/service/create/`,
        responseType: "json",
        headers: {
          'Authorization': `Bearer ${tokenState}`,
        },
        data: {
            hospitalID: hospitalIDState,
            serviceName: serviceNameValue,
            serviceCategory: serviceCategoryValue,
            serviceDescription: serviceDescriptionValue,
            serviceFee: serviceFeeValue
        },
      })

      setServiceState([...serviceState, result.data]);
    }

    return (
      <div className="flex flex-col p-8 my-8 bg-white rounded-md">
        <h1 className="capitalize text-2xl font-medium text-navy">Add Service</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col">
            <label>Name</label>
            <input id="name" type="text" className="bg-slate-200 p-2 rounded-md" value={serviceNameValue} onChange={serviceNameHandler}/>
          </div>

          <div className="flex flex-col">
            <label>Category</label>
            <input id="caategory" type="text" className="bg-slate-200 p-2 rounded-md" value={serviceCategoryValue} onChange={serviceCategoryHandler}/>
          </div>

          <div className="flex flex-col justify-end row-span-2">
            <button type="submit" className=" bg-navy p-2 rounded-md text-white capitalize font-medium text-lg" onClick={addServiceHandler}>Submit</button>
          </div>

          <div className="flex flex-col">
            <label>Description</label>
            <input id="email" type="email" className="bg-slate-200 p-2 rounded-md" value={serviceDescriptionValue} onChange={serviceDescriptionHandler}/>
          </div>


          <div className="flex flex-col">
            <label>Fee</label>
            <input id="phone" type="tel" className="bg-slate-200 p-2 rounded-md" value={serviceFeeValue} onChange={serviceFeeHandler}/>
          </div>
        </div>
      </div>

  );
}

export default AddServices