import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from '@heroui/react';
import { useCallback } from 'react';
import { DarkModeSwitch } from './darkmodeswitch';
import { useNavigate } from 'react-router';

export const UserDropdown = () => {
    const router = useNavigate();
    const handleLogout = useCallback(async () => {
        router('/login');
    }, [router]);

    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Avatar
                        as='button'
                        color='secondary'
                        size='sm'
                        src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                    />
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label='User menu actions' onAction={(actionKey) => console.log({ actionKey })}>
                <DropdownItem key='profile' className='flex flex-col justify-start w-full items-start'>
                    <p>Signed in as</p>
                    <p>zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='configurations'>Configurations</DropdownItem>
                <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
                <DropdownItem key='logout' color='danger' className='text-danger' onPress={handleLogout}>
                    Log Out
                </DropdownItem>
                <DropdownItem key='switch'>
                    <DarkModeSwitch />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
