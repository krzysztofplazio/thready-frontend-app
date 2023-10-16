
// 1. import `ChakraProvider` component
// import Background from './components/main/Background';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import './App.css';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  );
}

export default App;