const axios = require('axios');
export const addDoctor = async() => {
    const result = await axios({
        method: "post",
        url: localServiceCreate,
        responseType: "stream",
        data: {
            hospitalID: hospitalID,
            doctorName: doctorName,
            doctorEmail: doctorEmail,
            doctorPassword: doctorPassword
        },
    })

    if (result.status == 200) {
        console.log("login error");
    }

    console.log(result.data);
} 