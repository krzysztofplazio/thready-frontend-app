import { Text } from '@chakra-ui/react'
import ProjectTable from '../datas/ProjectTable';

function MainPage() {
    return(
        <div>
            <Text fontSize='3xl' 
                 style={{
                    paddingTop: '0',
                    paddingBottom: '2%',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                 }}
            >
                Wszystkie projekty:
            </Text>
            <ProjectTable />
        </div>
    );
}

export default MainPage