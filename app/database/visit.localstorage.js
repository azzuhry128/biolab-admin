
const visitStorage = (data) => {
    console.log("FROM-VISIT-LOCALSTORAGE", data);
    localStorage.setItem('VISIT', JSON.stringify(data));
};

export default visitStorage