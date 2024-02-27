import { Box } from "@mui/material";
import './MainBody.scss';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import ProjectView from "../../../views/projects/ProjectView";

export default function MainBody() {
    return(
        <React.Fragment>
            <Box className='main-box'>
                <Routes>
                    <Route path='/' element={<Dashboard />}></Route>
                    <Route path='/projects' element={<ProjectView />}></Route>
                    <Route path='/projects/:id' element={<span>Dupa</span>}></Route>
                    <Route path='*' element={<span>404: The page you are looking for isn’t here
You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</span>} />
                </Routes>
            </Box>
        </React.Fragment>
    );
}