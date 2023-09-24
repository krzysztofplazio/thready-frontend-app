import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import './ProjectTable.scss'
import StatusBadge from '../layouts/StatusBadge';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, EditIcon } from '@chakra-ui/icons';

const dane = [
  { id: 1, name: 'Project Tracker', status: { name: "new", color: "green"} },
  { id: 2, name: 'JkpChat - new project', status: { name: "in progress", color: "yellow"} },
  { id: 3, name: 'Tegi szmegi project', status: { name: "closed", color: "blue"} },
  // { id: 4, name: 'Thready' },
  // { id: 5, name: 'New sync tool info information data sync etc.' },
  // { id: 6, name: 'Very special top secret project' }, 
  // { id: 7, name: 'Niggaapp' },
  // { id: 8, name: 'Facebook API - how to XDDX' },
];

function ProjectTable() {
  return(
    <div>
      <TableContainer>
        <Table size='md'>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>nazwa projektu</Th>
              <Th>status</Th>
              <Th>akcje</Th>
            </Tr>
          </Thead>
          {generateTableBody()}
        </Table>
      </TableContainer>
    </div>
  );
}

function generateTableBody() {
  
  return (
    dane.map((element: IProject) => (
      <Tbody>
        {generateTableBodyTds(element)}
      </Tbody>
    )));
}

function generateTableBodyTds(element: IProject) {
  const projectPath = `/projects/${element.id}`;
  return(
    <Tr>
      <Td>{element.id}</Td>
      <Td>
        <Link to={projectPath} 
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
        >
          <span>{element.name}</span><ChevronRightIcon />
        </Link>  
      </Td>
      <Td><StatusBadge name={element.status.name} color={element.status.color} /></Td>
      <Td>
        <Link to={projectPath + '/edit-project'}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
          <EditIcon /> <span style={{ marginLeft: '5px' }}>Edytuj</span>
        </Link>
      </Td>
    </Tr>
  );
}

export default ProjectTable;
