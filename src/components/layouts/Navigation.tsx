import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, List, ListItem } from "@chakra-ui/react";
import './Navigation.scss';
import { AddIcon, CalendarIcon } from "@chakra-ui/icons";
import ProjectIconWhite from "../icons/ProjectIconWhite";
import UserListWhite from "../icons/UserListWhite";
import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <div style={{
             color: 'white',
        }}>
            <h3 style={{
                padding: '5% 7%',
                color: '#FFFFFF66',
            }}>Menu</h3>
            <Accordion borderColor='#434E64'>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{
                            borderLeft: '4px solid orange !important',
                        }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Projekty
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} padding='0 20px 0 0'>
                        <List spacing={3}>
                            <Link to='/projects?user=plaziok' className='link'>
                                <ListItem className="list-item">
                                    <UserListWhite /> <span>Moje projekty</span>
                                </ListItem>
                            </Link>
                            <Link to='/projects' className='link'>
                                <ListItem className="list-item">
                                    <ProjectIconWhite /> <span>Wszystkie projekty</span>
                                </ListItem>
                            </Link>
                            <Link to='/projects/add-project' className='link'>
                                <ListItem className="list-item">
                                    <AddIcon /> <span>Dodaj projekt</span>
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{
                            borderLeft: '4px solid orange !important',
                        }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Wątki
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} paddingLeft='0' paddingTop='0'>
                        <List spacing={3}>
                            <ListItem className="list-item">
                                <CalendarIcon /> <span>Show all projects</span>
                            </ListItem>
                            <ListItem className="list-item">
                                <CalendarIcon /> <span>Show all projects</span>
                            </ListItem>
                            <ListItem className="list-item">
                                <CalendarIcon /> <span>Show all projects</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem className="list-item">
                                <CalendarIcon /> <span>Show all projects</span>
                            </ListItem>
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Navigation;