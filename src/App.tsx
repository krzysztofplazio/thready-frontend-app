
// 1. import `ChakraProvider` component
// import Background from './components/main/Background';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/main-layout/MainLayout';

function App() {
  return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  );
}

export default App;