
// 1. import `ChakraProvider` component
// import Background from './components/main/Background';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/main-layout/MainLayout';
import Login from './components/layouts/login/Login';

function App() {
  const token = "";
  if (token === ""){
    <Navigate to='/sign-in' />
  }

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