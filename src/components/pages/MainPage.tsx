import { Avatar, Box, Text } from '@chakra-ui/react'
import ProjectList from '../datas/ProjectList';

function MainPage()
{
    return(
        <div>
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text 
                    fontSize='6xl'
                    fontFamily='mooli'
                    fontWeight='700'
                    width='50%'
                >
                    Thready
                </Text>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: '50%',
                    }}
                >
                    <Avatar marginRight='2%' /> 
                    <Text fontSize='2xl'>Krzysztof Płazio</Text>
                </div>
            </div>
            <div>
                <Text 
                    fontSize='3xl'
                >
                    Twoje projekty:
                </Text>
                <Box borderWidth='1px'
                     borderColor='#afafaf'
                     maxH='50.5vh'
                     minH='50.5vh'
                     marginTop='2%'
                     overflow='auto'
                >
                    <ProjectList />
                </Box>
            </div>
        </div>
    );
}

export default MainPage