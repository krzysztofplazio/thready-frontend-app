import { EditIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import React from 'react';
import './ProjectList.css'

// Przykładowe dane w tablicy
const dane = [
  { id: 1, name: 'Project Tracker' },
  { id: 2, name: 'JkpChat - new project' },
  { id: 3, name: 'Tegi szmegi project' },
  { id: 4, name: 'Thready' },
  { id: 5, name: 'New sync tool info information data sync etc.' },
  { id: 6, name: 'Very special top secret project' }, 
  { id: 7, name: 'Niggaapp' },
  { id: 8, name: 'Facebook API - how to XDDX' },
];

// Interfejs reprezentujący pojedynczy element
interface IProject {
  id: number;
  name: string;
}

// Komponent reprezentujący pojedynczy element
function Project({ id, name }: IProject) {
  const projectLink = `/projects/${id}`;
  const editProjectLink = `/projects/${id}/edit`;
  return(
  <Box className='project' key={id} display='flex' border='1px solid black' alignContent='center' margin='2%'>
    <div style={{
        display: 'flex',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text fontSize='6xl' fontFamily='mooli'>{id}</Text>
    </div>
    <div style={{
        borderLeft: '1px solid black',
        width: '80%',
        margin: '1% 0',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2%',
    }}>
        <Link className='project-link' to={projectLink}>
          <Text fontSize='3xl'>{name.length > 37 ? name.slice(0, 36) + '...' : name}</Text>
        </Link>
    </div>
    <div
      style={{
        margin: '1% 0',
        width: '10%',
        borderLeft: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link className='project-edit-link' style={{ padding: '15%' }} to={editProjectLink} >
        <EditIcon boxSize='30px' />
      </Link>
    </div>
  </Box>);
}

// Komponent nadrzędny renderujący listę komponentów
function ProjectList() {
  return (
    <div>
      {dane.map((element: IProject) => (
        <Project key={element.id} {...element} />
      ))}
    </div>
  );
}

export default ProjectList;
