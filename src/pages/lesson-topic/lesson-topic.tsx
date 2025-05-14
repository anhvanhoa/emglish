import { Button, Input, Accordion, AccordionItem, Popover, PopoverTrigger, PopoverContent } from '@heroui/react';
import { EllipsisVertical, GripVertical, PencilLine, PlusIcon, SearchIcon, Trash, X } from 'lucide-react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState, useMemo } from 'react';
import { Link } from 'react-router';

function SortableItem({ id, children, text }: { id: string; children: React.ReactNode; text?: string }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
    };
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className='flex items-center space-x-2 relative'>
                {children}
                <p
                    style={{
                        opacity: isDragging ? 1 : 0,
                    }}
                    className='whitespace-nowrap font-semibold left-full pointer-events-none absolute text-sm'
                >
                    {text}
                </p>
            </div>
        </div>
    );
}

export const LessonTopic = () => {
    const [items, setItems] = useState([
        {
            id: '1',
            label: 'Chào hỏi giao tiếp / căn bản',
            children: [
                { id: '1.1', label: 'Chào hỏi, giới thiệu, tạm biệt (5)' },
                { id: '1.2', label: 'Xưng hô, tên, nghề nghiệp (7)' },
                { id: '1.3', label: 'Quốc gia, ngôn ngữ (0)' },
            ],
        },
        {
            id: '2',
            label: 'Mua sắm & Ăn uống',
            children: [
                { id: '2.1', label: 'Gọi món, đặt bàn (5)' },
                { id: '2.2', label: 'Hỏi giá, thanh toán (4)' },
                { id: '2.3', label: 'Mua sắm tại siêu thị / cửa hàng (6)' },
            ],
        },
        {
            id: '3',
            label: 'Đi lại & Hỏi đường',
            children: [
                { id: '3.1', label: 'Hỏi đường, phương tiện công cộng (7)' },
                { id: '3.2', label: 'Đi taxi, đặt vé, sân bay (3)' },
            ],
        },
        {
            id: '4',
            label: 'Khách sạn & Lưu trú',
            children: [
                { id: '4.1', label: 'Đặt phòng, nhận phòng (2)' },
                { id: '4.2', label: 'Hỏi dịch vụ, phàn nàn (1)' },
            ],
        },
    ]);
    const sensors = useSensors(useSensor(PointerSensor));

    // Helper to flatten all draggable ids (topics and lessons)
    const allDraggableIds = useMemo(() => {
        const ids = items.map((topic) => topic.id);
        items.forEach((topic) => {
            topic.children.forEach((lesson) => ids.push(lesson.id));
        });
        return ids;
    }, [items]);
    console.log(allDraggableIds);
    // Handler for drag end (topics or lessons)
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        // Topic drag
        const activeTopicIdx = items.findIndex((t) => t.id === active.id);
        const overTopicIdx = items.findIndex((t) => t.id === over.id);
        if (activeTopicIdx !== -1 && overTopicIdx !== -1) {
            setItems(arrayMove(items, activeTopicIdx, overTopicIdx));
            return;
        }

        // Lesson drag
        let topicIdx = -1,
            lessonIdx = -1,
            overTopicIdx2 = -1,
            overLessonIdx = -1;
        items.forEach((topic, tIdx) => {
            const lIdx = topic.children.findIndex((l) => l.id === active.id);
            if (lIdx !== -1) {
                topicIdx = tIdx;
                lessonIdx = lIdx;
            }
            const overLIdx = topic.children.findIndex((l) => l.id === over.id);
            if (overLIdx !== -1) {
                overTopicIdx2 = tIdx;
                overLessonIdx = overLIdx;
            }
        });
        // Only allow drag within the same topic for now
        if (topicIdx !== -1 && topicIdx === overTopicIdx2) {
            setItems((prev) =>
                prev.map((topic, idx) => {
                    if (idx !== topicIdx) return topic;
                    return {
                        ...topic,
                        children: arrayMove(topic.children, lessonIdx, overLessonIdx),
                    };
                }),
            );
        }
    };

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
                        as={Link}
                        className='h-10'
                        color='primary'
                        radius='lg'
                        startContent={<PlusIcon className='size-4' />}
                        variant='solid'
                        to='/lesson-topic/create-topic'
                    >
                        New Topic
                    </Button>
                    <Button
                        as={Link}
                        className='h-10'
                        color='danger'
                        radius='lg'
                        startContent={<PlusIcon className='size-4' />}
                        variant='solid'
                        to='/lesson-topic/create-lesson'
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
                                <Button as={Link} to="/lesson-topic/import" radius='md' variant='light' className='py-1'>
                                    Import from file
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className='mx-auto w-full'>
                <div className='mt-6'>
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={items.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                            <Accordion defaultExpandedKeys={['1']} className='gap-1 py-2' variant='shadow'>
                                {items.map((topic) => (
                                    <AccordionItem
                                        key={topic.id}
                                        title={
                                            <div className='flex w-full items-center justify-between'>
                                                <div className='flex items-center space-x-2'>
                                                    <SortableItem key={topic.id} id={topic.id} text={topic.label}>
                                                        <GripVertical className='size-4' />
                                                    </SortableItem>
                                                    <span className='font-medium text-sm'>
                                                        {topic.label} ({topic.children.length})
                                                    </span>
                                                </div>
                                                <div>
                                                    <Button as={'span'} size='sm' variant='light' isIconOnly>
                                                        <PencilLine className='size-4' />
                                                    </Button>
                                                    <Button as={'span'} size='sm' variant='light' isIconOnly>
                                                        <Trash className='size-4' />
                                                    </Button>
                                                </div>
                                            </div>
                                        }
                                        classNames={{
                                            content: 'px-3 bg-gray-50 rounded-xl my-1',
                                            trigger: 'py-2 px-1',
                                        }}
                                    >
                                        <SortableContext
                                            items={topic.children.map((c) => c.id)}
                                            strategy={verticalListSortingStrategy}
                                        >
                                            <div className='flex flex-col gap-2'>
                                                {topic.children.map((lesson) => (
                                                    <div className='flex items-center justify-between' key={lesson.id}>
                                                        <SortableItem id={lesson.id}>
                                                            <span className='text-sm'>- {lesson.label}</span>
                                                        </SortableItem>
                                                        <div>
                                                            <Button size='sm' variant='light' isIconOnly>
                                                                <PencilLine className='size-4' />
                                                            </Button>
                                                            <Button size='sm' variant='light' isIconOnly>
                                                                <Trash className='size-4' />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </SortableContext>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </div>
    );
};
