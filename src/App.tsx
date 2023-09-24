
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Background from './components/main/Background';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import BasicPie from './components/datas/CircleChart';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Background />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;