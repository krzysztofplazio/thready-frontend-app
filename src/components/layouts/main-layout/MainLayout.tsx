import React from "react";

import './MainLayout.scss';
import Menu from "../menu/Menu";
import Header from "../header/Header";
import MainBody from "../main-body/MainBody";

export default function MainLayout() {
    return(
    <React.Fragment>
        {/* { localStorage.getItem("token") == null ? <Navigate to="/login" /> : */}
        <div className="main-layout">
            <Menu className="menu-box-hidden" />
            <div className="main-body">
                <Header />
                <MainBody />
            </div>
        </div> 
    </React.Fragment>);
}