import { Box, Switch } from '@chakra-ui/react'
import MainPage from '../pages/MainPage';
import './Background.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from '../pages/ProjectPage';

function Background()
{
    return(
        <div 
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: '100vh',
            }}
        >
            <Box background='white'
                 minW='50%'
                 minH='70vh'
                 color='black' 
                 borderWidth='2px' 
                 borderColor='#efefef'
                 overflow='hidden'
                 className='bg'
                 padding='1%'
            >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPage />}></Route>
                        <Route path='/projects' element={<MainPage />}></Route>
                        <Route path='/projects/:id' element={<ProjectPage />}></Route>
                        <Route path='*' element={<div>404 Not found</div>} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </div>
    );
}

export default Background;