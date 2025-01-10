"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../lib/fontawesome';
import { useContext } from "react";
import { GlobalStateContext } from "@/app/store/state";
import { useRouter } from "next/router";


export default function Sidebar() {
    const {setPageState} = useContext(GlobalStateContext)

    const MenuItems = [
        { title: "Account", icon: <FontAwesomeIcon icon="user" size="sm" className="size-6 text-navy"/>}, 
        { title: "Doctors", icon: <FontAwesomeIcon icon="user-doctor" size="sm" className="size-6 text-navy"/>}, 
        { title: "Services", icon: <FontAwesomeIcon icon="briefcase-medical" size="sm" className="size-6 text-navy"/>}, 
    ];

    const adminName = "admin";
    const adminEmail = "N5n3Y@example.com";

    const MenuItemRender = () => {
        return (
            <ul className="flex flex-col justify-center items-center gap-20 p-12">
                {MenuItems.map((item, index) => (
                    <li key={index} className="flex justify-center items-center gap-4 font-semibold text-lg" onClick={() => setPageState(index)}>
                        <div>
                            {item.icon}
                        </div>
                        <a href="#">{item.title}</a>
                    </li>
                ))}
            </ul>
        );
    };

    const logout = () => {
        const router = useRouter();
        router.push('/login')
    }

    return (
    <div className="h-screen flex flex-col justify-between max-w-max p-8 shadow-2xl">
        <div id="admin-profile" className="flex justify-center gap-4 p-4">
            <div id="admin-photo" className="w-16 h-16 rounded-full bg-navy"></div>
            <div id="admin-credentials" className="flex flex-col gap-2">
                <h3 id="admin-name" className="font-bold text-greytext">{adminName}</h3>
                <h3 id="admin-email" className="font-bold text-greytext">{adminEmail}</h3>
            </div>
        </div>

        <div id="dashboard-identity" className="flex justify-center items-center gap-4 bg-navy rounded-md  p-4">
            {/* <img src=""/> */}
            <FontAwesomeIcon icon="box-open" size="sm" className="text-yellow-500 size-8" />
            <h3 className="capitalize font-bold text-center text-yellow-500">admin dashboard</h3>
        </div>

        <div id="menu">
            <MenuItemRender/>
        </div>

        <div className="flex w-full p-16 items-center justify-center">
            <button id="logout" className="flex justify-center items-center gap-4 p-2" onClick={logout}>
                {/* <img src=""/> */}
                <FontAwesomeIcon icon="arrow-right-from-bracket" size="sm" className="size-6 text-red-400"/>
                <h3 className="font-medium capitalize text-xl text-red-400">Logout</h3>    
            </button> 
        </div>

    </div>
    )
}