const axios = require('axios');

const localServiceGetAll = process.env.LOCAL_SERVICE_GET_URL;
const localServiceCreate = process.env.LOCAL_SERVICE_CREATE_URL ;
const localServiceUpdate = process.env.LOCAL_SERVICE_UPDATE_URL;
const localServiceDelete = process.env.LOCAL_SERVICE_DELETE_URL;

const getAllDoctors = async (id) => {
    const result = await axios({
      method: "get",
      url: `http://localhost:3000/hospital/doctor/data/${id}`,
      responseType: "json",
    });
  
    return result.data
  };
  

const createDoctors = async(hospitalID, doctorName, doctorEmail, doctorPassword) => {
    const result = await axios({
        method: "post",
        url: localServiceCreate,
        responseType: "json",
        data: {
            hospitalID: hospitalID,
            doctorName: doctorName,
            doctorEmail: doctorEmail,
            doctorPassword: doctorPassword
        },
    })
    return result.data
}

const updateDoctor = async(doctorID, doctorName, doctorEmail, doctorPassword) => {
    const result = await axios({
        method: "put",
        url: `${localServiceGetAll}?doctorID=${doctorID}`,
        responseType: "json",
        data: {
            doctorName: doctorName,
            doctorEmail: doctorEmail,
            doctorPassword: doctorPassword
        },
    })

    return result
}

const deleteDoctor = async(doctorID) => {
    const result = await axios({
        method: "delete",
        url: `${localServiceGetAll}?hospitalID=${doctorID}`,
        responseType: "json",
    })

    return result
}

module.exports = 
{
    getAllDoctors, 
    createDoctors, 
    updateDoctor, 
    deleteDoctor
};
