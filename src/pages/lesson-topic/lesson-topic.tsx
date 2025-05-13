import { Button, Input, Accordion, AccordionItem, Popover, PopoverTrigger, PopoverContent } from '@heroui/react';
import { EllipsisVertical, PencilLine, PlusIcon, SearchIcon, X } from 'lucide-react';

export const LessonTopic = () => {
    return (
        <div className='px-6'>
            <div className='mt-1 flex w-full flex-col gap-3 sm:flex-row sm:items-center'>
                <Input
                    classNames={{
                        base: 'w-full',
                    }}
                    placeholder='Search...'
                    radius='lg'
                    startContent={<SearchIcon className='size-5' />}
                    endContent={<X className='size-4' />}
                    type='search'
                    variant='flat'
                    isClearable
                />
                <div className='flex gap-2'>
                    <Button
                        className='h-10'
                        color='primary'
                        radius='lg'
                        startContent={<PlusIcon className='size-4' />}
                        variant='solid'
                    >
                        New Topic
                    </Button>
                    <Button
                        className='h-10'
                        color='danger'
                        radius='lg'
                        startContent={<PlusIcon className='size-4' />}
                        variant='solid'
                    >
                        New Lesson
                    </Button>
                    <Popover placement='bottom-end' showArrow={true}>
                        <PopoverTrigger>
                            <Button isIconOnly>
                                <EllipsisVertical className='size-5' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='p-0'>
                            <div className='flex flex-col p-1'>
                                <Button radius='md' variant='light' className='py-1'>
                                    Export to file
                                </Button>
                                <Button radius='md' variant='light' className='py-1'>
                                    Import from file
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className='mx-auto w-full'>
                <div className='rounded-xl px-4 bg-gray-50 mt-6'>
                    <Accordion defaultExpandedKeys={['1']} showDivider={false} className='gap-1'>
                        <AccordionItem
                            as='div'
                            key='1'
                            title={
                                <div className='flex w-full items-center justify-between'>
                                    <span className='font-medium'>Chào hỏi giao tiếp / căn bản (3)</span>
                                    <Button size='sm' variant='light' isIconOnly>
                                        <PencilLine className='size-4' />
                                    </Button>
                                </div>
                            }
                            classNames={{
                                content: 'pl-4',
                                title: 'py-0',
                            }}
                        >
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between py-1'>
                                    <span>Chào hỏi, giới thiệu, tạm biệt (5)</span>
                                    <Button size='sm' variant='light' className='min-w-16'>
                                        Edit
                                    </Button>
                                </div>
                                <div className='flex items-center justify-between py-1'>
                                    <span>Xưng hô, tên, nghề nghiệp (7)</span>
                                    <Button size='sm' variant='light' className='min-w-16'>
                                        Edit
                                    </Button>
                                </div>
                                <div className='flex items-center justify-between py-1'>
                                    <span>Quốc gia, ngôn ngữ (0)</span>
                                    <Button size='sm' variant='light' className='min-w-16'>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
