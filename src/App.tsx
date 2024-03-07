import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/main-layout/MainLayout';
import Login from './components/layouts/login/Login';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;