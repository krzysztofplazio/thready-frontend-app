import { Text } from "@chakra-ui/react";
import Navigation from "./Navigation";

function Bar() {
    return(
    <div className='bar' 
         style={{
             minWidth: '15%',
             height: '100vh',
             backgroundColor: '#434E64',
             borderRight: '1px solid #0E1A32',
    }}>
        <div className="logo"
             style={{
                height: '6%',
             }}>
            <Navigation />
        </div>
    </div>);
}

export default Bar;