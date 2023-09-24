import { Avatar, Menu, Text, MenuButton, Portal, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import './Header.scss';

function Header()
{
    return(
        <div style={{
            display: 'flex',
            width: '100%',
            borderBottom: '1px solid #E0E0E0',
            justifyContent: 'end',
            backgroundColor: '#F0F0F0',
            height: '6%'
        }}
            className='header'>
            <Menu>
                <MenuButton className="menu-button">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{
                            marginRight: '5px'
                        }}>
                            <Avatar size='sm'/> 
                        </div>
                        <Text fontSize='1xl' className='user-fullname'>Krzysztof Płazio</Text>
                        <ChevronDownIcon fontSize='2xl' marginLeft='20px' />
                    </div>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Show projects</MenuItem>
                        <MenuItem>Assigned threads</MenuItem>
                        <MenuDivider />
                        <MenuItem>Log out</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </div>
    );
}

export default Header;