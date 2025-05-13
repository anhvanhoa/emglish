import React from 'react';
import { BurguerButton } from './burguer-button';
import { NotificationsDropdown } from './notifications-dropdown';
import { UserDropdown } from './user-dropdown';
import { Navbar, NavbarContent } from '@heroui/react';
import BreadcrumbGlobal from './BreadcrumbGlobal';
import { configBreadcrumbs } from '@/router';
interface Props {
    children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
    return (
        <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
            <Navbar
                className='w-full'
                classNames={{
                    wrapper: 'w-full max-w-full',
                }}
            >
                <NavbarContent className='md:hidden'>
                    <BurguerButton />
                </NavbarContent>
                <NavbarContent className='w-full max-md:hidden'>
                    <BreadcrumbGlobal routes={configBreadcrumbs} />
                </NavbarContent>
                <NavbarContent justify='end' className='w-fit data-[justify=end]:flex-grow-0'>
                    <NotificationsDropdown />
                    <NavbarContent>
                        <UserDropdown />
                    </NavbarContent>
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    );
};
