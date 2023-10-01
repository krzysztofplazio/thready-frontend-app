import MainPage from '../pages/MainPage';
import './Background.scss';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from '../pages/ProjectPage';
import Header from '../layouts/Header';
import Bar from '../layouts/Bar';

function Background()
{
    return(
        <div style={{
            width: '100%',

        }}>
        <Header />
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Bar />
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<MainPage />}></Route>
                        <Route path='/projects' element={<MainPage />}></Route>
                        <Route path='/projects/:id' element={<ProjectPage />}></Route>
                        <Route path='*' element={<div>404 Not found</div>} />
                    </Routes>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Background;