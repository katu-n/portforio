import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function RouterApp(){
    return(
        <>
            <ul>
                <li><Link to="/">topページ</Link></li>
                <li><Link to="/main">mainページ</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </>
    )
}