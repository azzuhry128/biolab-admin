
export const doctorStorage = (data) => {
    console.log("FROM-DOCTOR-LOCALSTORAGE", data);
    localStorage.setItem('DOCTORS', JSON.stringify(data));
};

export const retrieveDoctorData = () => {
    return JSON.parse(localStorage.getItem('DOCTORS'));
};

export const addDoctorToLocalStorage = (newValue) => {
    let existingData = localStorage.getItem("DOCTORS");
    existingData = existingData ? JSON.parse(existingData) : [];
    existingData.push(newValue);

    localStorage.setItem("DOCTORS", JSON.stringify(existingData));
}
