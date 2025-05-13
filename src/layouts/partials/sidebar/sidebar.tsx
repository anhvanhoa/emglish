import { Sidebar } from './sidebar.styles';
import { CompaniesDropdown } from './companies-dropdown';
import { SidebarItem } from './sidebar-item';
import { useSidebarContext } from '@/provider/layout-context';
import { useLocation } from 'react-router';
import { Home, Database, BookOpen, MessageSquare, Book, Music, HelpCircle, Settings, LogOut } from 'lucide-react';

const sidebars = [
    {
        title: 'Dashboard',
        icon: <Home size={18} />,
        href: '/',
    },
    {
        title: 'Master Data',
        icon: <Database size={18} />,
        href: '/master-data',
    },
    {
        title: 'Topic/Lesson',
        icon: <BookOpen size={18} />,
        href: '/lesson-topic',
    },
    {
        title: 'Dialog',
        icon: <MessageSquare size={18} />,
        href: '/dialog',
    },
    {
        title: 'Story',
        icon: <Book size={18} />,
        href: '/story',
    },
    {
        title: 'Song',
        icon: <Music size={18} />,
        href: '/song',
    },
    {
        title: 'Quiz',
        icon: <HelpCircle size={18} />,
        href: '/quiz',
    },
    {
        title: 'Setting',
        icon: <Settings size={18} />,
        href: '/setting',
    },
    {
        title: 'Logout',
        icon: <LogOut size={18} />,
        href: '/logout',
    },
];

export const SidebarWrapper = () => {
    const { pathname } = useLocation();
    const { collapsed, setCollapsed } = useSidebarContext();
    return (
        <aside className='h-screen z-[20] sticky top-0'>
            {collapsed ? <div className={Sidebar.Overlay()} onClick={setCollapsed} /> : null}
            <div
                className={Sidebar({
                    collapsed: collapsed,
                })}
            >
                <div className={Sidebar.Header()}>
                    <CompaniesDropdown />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <div className={Sidebar.Body()}>
                        {sidebars.map((item, index) => (
                            <SidebarItem
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                isActive={pathname === item.href}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};
