"use client"
const hospitalStorage = (data) => {
    console.log("FROM-HOSPITAL-LOCALSTORAGE", data);
    localStorage.setItem('HOSPITAL', JSON.stringify(data));
};


export const retrieveHospitalData = () => {
    const data = localStorage.getItem("HOSPITAL")

    console.log(data)

    const object = {
        id: data.id,
        name: data.name,
        email: data.email,
        longitude: data.longitude,
        latitude: data.latitude,
        token: data.token
    }

    return object;
};

export default hospitalStorage
