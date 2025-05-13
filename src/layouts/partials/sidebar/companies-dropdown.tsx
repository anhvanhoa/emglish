'use client';
import FlagAustraliaIcon from '@/components/icons/flag/flag-australia-icon';
import FlagCnIcon from '@/components/icons/flag/flag-cn-icon';
import FlagUnitedStatesIcon from '@/components/icons/flag/flag-united-states-icon';
import FlagVnIcon from '@/components/icons/flag/flag-vn-icon';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@heroui/react';
import React, { useState } from 'react';
interface Local {
    name: string;
    code: string;
    flag: React.ReactNode;
}

const data = [
    {
        name: 'China',
        code: 'cn',
        flag: <FlagCnIcon />,
    },
    {
        name: 'Vietnam',
        code: 'vi',
        flag: <FlagVnIcon />,
    },
    {
        name: 'Australia',
        code: 'au',
        flag: <FlagAustraliaIcon />,
    },
    {
        name: 'United States',
        code: 'us',
        flag: <FlagUnitedStatesIcon />,
    },
];

export const CompaniesDropdown = () => {
    const [local, setLocal] = useState<Local>({
        name: 'Tiếng việt',
        code: 'vi',
        flag: <FlagVnIcon />,
    });
    return (
        <Dropdown
            classNames={{
                base: 'w-full min-w-[150px]',
            }}
        >
            <div className='flex items-center gap-2 justify-between'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-medium m-0 text-default-900 -mb-4 whitespace-nowrap'>Flutone</h3>
                    <span className='text-xs font-medium text-default-500'>Learn simple</span>
                </div>
                <DropdownTrigger className='cursor-pointer'>
                    <span className='w-8 rounded-xs overflow-hidden'>{local.flag}</span>
                </DropdownTrigger>
            </div>
            <DropdownMenu>
                <DropdownSection className='mb-0'>
                    {data.map((item, index) => (
                        <DropdownItem
                            key={index}
                            className='rounded-md py-2'
                            value={item.code}
                            onClick={() => {
                                setLocal(item);
                            }}
                        >
                            <div className='flex items-center gap-2'>
                                <div className='w-8 rounded-xs overflow-hidden' title={item.name}>
                                    {item.flag}
                                </div>
                                <span className='text-sm text-default-900'>{item.name}</span>
                            </div>
                        </DropdownItem>
                    ))}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};
