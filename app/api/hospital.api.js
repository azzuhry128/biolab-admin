const axios = require("axios");

const localHospitalLogin= process.env.LOCAL_HOSPITAL_LOGIN_URL;
const localHospitalRegister= process.env.LOCAL_HOSPITAL_REGISTER_URL;
const localHospitalUpdate= process.env.LOCAL_HOSPITAL_EDIT_URL;
const localHospitalDelete= process.env.LOCAL_HOSPITAL_DELETE_URL;

const getHospitals = async () => {
    const result = await axios({
        method: "get",
        url: localHospitalLogin,
        responseType: "stream",
        data: {},
    });
    return result;
}

const createHospital = async (name, email, password) => {
    const result = await axios({
        method: "post",
        url: localHospitalRegister,
        responseType: "stream",
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
    return result;
}

const updateHospital = async (id, name, email, password) => {
    const result = await axios({
        method: "put",
        url: localHospitalUpdate,
        responseType: "stream",
        data: {
            id: id,
            name: name,
            email: email,
            password: password,
        },
    });
    return result;
}

const deleteHospital = async (id) => {
    const result = await axios({
        method: "delete",
        url: localHospitalDelete,
        responseType: "stream",
        data: {
            id: id
        },
    });
    return result;
}

module.exports = { getHospitals, createHospital, updateHospital, deleteHospital };


