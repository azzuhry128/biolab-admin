
const serviceStorage = (data) => {
    console.log("FROM-SERVICE-LOCALSTORAGE", data);
    localStorage.setItem('SERVICE', JSON.stringify(data));
};

export default serviceStorage;