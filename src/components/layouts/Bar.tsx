import { Text } from "@chakra-ui/react";
import Navigation from "./Navigation";

function Bar() {
    return(
    <div className='bar' 
         style={{
             width: '20%',
             height: '100vh',
             backgroundColor: '#434E64',
             borderRight: '1px solid #0E1A32',
    }}>
        <div className="logo"
             style={{
                height: '6%',
                borderBottom: '1px solid #3F4A60'
             }}>
            <Text 
                fontSize='35px'
                fontFamily='mooli'
                fontWeight='700'
                color='whiteAlpha.800'
                display='flex'
                paddingLeft='7%'
            >
                Thready
            </Text>
            <Navigation />
        </div>
    </div>);
}

export default Bar;