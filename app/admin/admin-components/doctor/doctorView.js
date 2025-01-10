import { GlobalStateContext } from "@/app/store/state";
import { useContext, useEffect } from "react";

const DoctorView = () => {
  const {doctorState} = useContext(GlobalStateContext);

  useEffect(() => {
    console.log(doctorState)
  }, [doctorState])

    return (
      <div className="flex flex-col flex-1 p-8 rounded-md bg-white overflow-auto">
        <h1 className="text-navy text-2xl font-semibold">Doctors List</h1>
          <table className="flex flex-col flex-1 table-auto my-8 w-full overflow-auto">
            <thead>
              <tr className="flex w-full">
                <th className="capitalize text-navy w-1/3 text-start">doctor name</th>
                <th className="capitalize text-navy w-1/3 text-start">email address</th>
              </tr>
            </thead>
            <tbody className="flex-1 overflow-y-auto">
              {doctorState.map((data, index) => (
                  <tr key={index} className="flex items-center text-center border-b border-gray-200 border-t">
                    <td className="flex justify-start gap-2 items-center w-1/3">
                      <div className="h-12 w-12 bg-navy my-2 rounded-full"/>
                      <h5 className="text-lg font-regular">{data.doctor_name}</h5>
                    </td>
                    <td className="text-md text-start font-regular w-1/3">
                      <h5 className="text-lg font-regular text-navy">{data.doctor_email}</h5>
                    </td>
                    {/* <td className="text-lg font-regular text-navy">{data.price}</td> */}
                  </tr>
                )
              )}
            </tbody>
          </table>
      </div>
    )
  }

  export default DoctorView