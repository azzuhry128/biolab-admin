const axios = require('axios');

const localServiceGetAll = process.env.LOCAL_SERVICE_GET_URL;
const localServiceCreate = process.env.LOCAL_SERVICE_CREATE_URL ;
const localServiceUpdate = process.env.LOCAL_SERVICE_UPDATE_URL;
const localServiceDelete = process.env.LOCAL_SERVICE_DELETE_URL;

const getServices = async(id) => {
    console.log("UUID", id)
    const result = await axios({
        method: "get",
        url: `http://localhost:3000/hospital/service/data/${id}`,
        responseType: "json",
    })

    return result
}

const createService = async(hospitalID, serviceName, serviceCategory, serviceDescription, serviceFee) => {
    const result = await axios({
        method: "json",
        url: localServiceCreate,
        responseType: "stream",
        data: {},
    })

    return result
}

const updateService = async() => {
    const result = await axios({
        method: "put",
        url: localServiceUpdate,
        responseType: "json",
        data: {},
    })

    return result
}

const deleteService = async() => {
    const result = await axios({
        method: "delete",
        url: localServiceDelete,
        responseType: "json",
        data: {},
    })

    return result
}

module.exports = 
{
    getServices, 
    createService, 
    updateService, 
    deleteService
};
