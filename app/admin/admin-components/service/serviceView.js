import { GlobalStateContext } from "@/app/store/state"
import { useContext, useEffect } from "react"

const ServiceView = () => {
    const {serviceState} = useContext(GlobalStateContext);

    useEffect(() => {
        console.log(serviceState)
    }, [serviceState])

    return (
      <div className="flex flex-col flex-1 p-8 rounded-md bg-white overflow-auto">
        <h1 className="text-navy text-2xl font-semibold">Service list</h1>
          <table className="flex flex-col flex-1 table-auto my-8 w-full overflow-auto">
            <thead>
              <tr className="flex justify-between">
                <th className="capitalize text-navy">service name</th>
                <th className="capitalize text-navy">category</th>
                {/* <th className="capitalize text-navy">description</th> */}
                <th className="capitalize text-navy">fee</th>
              </tr>
            </thead>
            <tbody className="flex-1 overflow-y-auto">
              {serviceState.map((data, index) => (
                  <tr key={index} className="flex items-center justify-between text-center border-b border-gray-200 border-t">
                    <td className="flex justify-center gap-2 items-center">
                      <div className="h-12 w-12 bg-navy my-2 rounded-full"/>
                      <h5 className="text-lg font-regular">{data.service_name}</h5>
                    </td>
                    <td className="text-md font-regular">
                      <h5 className="text-lg font-regular text-navy">{data.service_description}</h5>
                    </td>
                    <td className="text-lg font-regular text-navy">{data.service_fee}</td>
                    {/* <td className="text-lg font-regular text-navy">{data.price}</td> */}
                  </tr>
                )
              )}
            </tbody>
          </table>
      </div>
    )
  }

  export default ServiceView