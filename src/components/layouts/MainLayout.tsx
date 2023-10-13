import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import MainBody from "./MainBody";
import './MainLayout.scss';

export default function MainLayout() {
    return(
    <React.Fragment>
        <div className="main-layout">
            <Menu />
            <div className="main-body">
                <Header />
                <MainBody />
            </div>
        </div>
    </React.Fragment>);
}