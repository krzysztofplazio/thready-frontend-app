
// 1. import `ChakraProvider` component
// import Background from './components/main/Background';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/main-layout/MainLayout';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  );
}

export default App;