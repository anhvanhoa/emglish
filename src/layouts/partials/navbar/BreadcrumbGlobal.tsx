import { findBreadcrumbs, generatePath } from '@/libs/breadcrumb';
import { useLocation } from 'react-router';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import type { AppRoute } from '@/router';
import { Link } from 'react-router';

type Props = {
    routes: AppRoute[];
};

const BreadcrumbGlobal = ({ routes }: Props) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = findBreadcrumbs(pathnames, routes) || [];
    return (
        <div>
            {breadcrumbs.length > 0 && (
                <Breadcrumbs className='hidden md:flex' radius={'full'} variant='solid'>
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        const path = generatePath(breadcrumbs.slice(1, index + 1));
                        return (
                            <BreadcrumbItem underline={'hover'} key={path} className='text-sm'>
                                {!isLast && <Link to={path}>{crumb.name}</Link>}
                                {isLast && crumb.name}
                            </BreadcrumbItem>
                        );
                    })}
                </Breadcrumbs>
            )}
        </div>
    );
};

export default BreadcrumbGlobal;
