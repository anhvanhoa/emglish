import React from 'react';
import { Outlet } from 'react-router';
import { SidebarContext } from '@/provider/layout-context';
import { SidebarWrapper } from './partials/sidebar/sidebar';
import { NavbarWrapper } from './partials/navbar/navbar';
import { useLockedBody } from '@/hooks/useBodyLock';

const Main = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [_, setLocked] = useLockedBody(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setLocked(!sidebarOpen);
    };

    return (
        <SidebarContext.Provider
            value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}
        >
            <section className='flex'>
                <SidebarWrapper />
                <NavbarWrapper>
                    <Outlet />
                </NavbarWrapper>
            </section>
        </SidebarContext.Provider>
    );
};

export default Main;
