"use client"
const { createContext, useState } = require("react");

const GlobalStateContext = createContext();
const AdminPageStateContext = createContext();

function GlobalStateProvider({children}) {
    const [pageState, setPageState] = useState({value: 0});
    const [hospitalIDState, setHospitalIDState] = useState({})
    const [categoryIDState, setCategoryIDState] = useState({})
    const [categoryState, setCategoryState] = useState([]);
    const [tokenState, setTokenState] = useState({})
    const [doctorState, setDoctorState] = useState([]);
    const [serviceState, setServiceState] = useState([]);
    const [visitState, setVisitState] = useState([]);

    return(
        <GlobalStateContext.Provider value={{
            pageState, setPageState,
            hospitalIDState, setHospitalIDState,
            categoryIDState, setCategoryIDState,
            categoryState, setCategoryState,
            tokenState, setTokenState,
            doctorState, setDoctorState,
            serviceState, setServiceState,
            visitState, setVisitState
        }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

function AdminPageStateProvider({children}) {
    const [adminNameState, setAdminNameState] = useState({})
    const [adminEmailState, setAdminEmailState] = useState({})
    const [hospitalIDState, setHospitalIDState] = useState({})

    const [doctorState, setDoctorState] = useState([]);
    const [serviceState, setServiceState] = useState([]);
    const [visitState, setVisitState] = useState([]);

    return(
        <AdminPageStateContext.Provider value=
        {{
            adminNameState, setAdminNameState,
            adminEmailState, setAdminEmailState,
            hospitalIDState, setHospitalIDState,
            doctorState, setDoctorState,
            serviceState, setServiceState,
            visitState, setVisitState
        }}>
            {children}
        </AdminPageStateContext.Provider>
    )
}

export 
{
    GlobalStateProvider, 
    GlobalStateContext, 
    AdminPageStateProvider, 
    AdminPageStateContext
};