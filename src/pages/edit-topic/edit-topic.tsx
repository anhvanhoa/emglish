import { getMessage, isError } from '@/libs/form';
import {
    Input,
    Button,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    type Selection,
} from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Form, useForm, type FormSubmitHandler } from 'react-hook-form';
import { z } from 'zod';
const formSchema = z.object({
    topicName: z.string().min(2, {
        message: 'Topic name must be at least 2 characters.',
    }),
    englishName: z.string().min(2, {
        message: 'English name must be at least 2 characters.',
    }),
});

type FormTopic = z.infer<typeof formSchema>;

const rows = [
    {
        key: '1',
        language: 'Vietnamese',
        name: 'Dự định tương lai',
        lessons: '1',
    },
    {
        key: '2',
        language: 'English',
        name: 'Future Plan',
        lessons: '1',
    },
    {
        key: '3',
        language: 'Japanese',
        name: '将来の計画',
        lessons: '1',
    },
    {
        key: '4',
        language: 'Korean',
        name: '미래 계획',
        lessons: '1',
    },
    {
        key: '5',
        language: 'Chinese',
        name: '未来计划',
        lessons: '1',
    },
    {
        key: '6',
        language: 'French',
        name: 'Projet futur',
        lessons: '1',
    },
    {
        key: '7',
        language: 'Spanish',
        name: 'Plan futuro',
        lessons: '1',
    },
    {
        key: '8',
        language: 'German',
        name: 'Zukunftsplan',
        lessons: '1',
    },
    {
        key: '9',
        language: 'Thai',
        name: 'แผนในอนาคต',
        lessons: '1',
    },
    {
        key: '10',
        language: 'Russian',
        name: 'План на будущее',
        lessons: '1',
    },
    {
        key: '11',
        language: 'Italian',
        name: 'Piano futuro',
        lessons: '1',
    },
    {
        key: '12',
        language: 'Portuguese',
        name: 'Plano futuro',
        lessons: '1',
    },
];

const columns = [
    {
        key: 'language',
        label: 'Language',
    },
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'lessons',
        label: 'Lessons',
    },
];

const EditTopic = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
    const form = useForm({
        defaultValues: {
            topicName: '未来计划',
            englishName: 'Future Plan',
        },
        reValidateMode: 'onSubmit',
        resolver: zodResolver(formSchema),
    });
    const onSubmit: FormSubmitHandler<FormTopic> = ({ data }) => {
        console.log('data', data);
    };
    return (
        <div className='px-6 mt-3'>
            <Form className='w-full' control={form.control} onSubmit={onSubmit}>
                <div className='space-y-4 w-full max-w-lg mx-auto'>
                    <p className='text-center text-xl py-2 font-bold'>Edit a topic</p>
                    <div className=''>
                        <Input
                            {...form.register('topicName')}
                            errorMessage={getMessage(form, 'topicName')}
                            isInvalid={isError(form, 'topicName')}
                            placeholder='Topic name'
                            className='flex-1'
                            variant='flat'
                        />
                    </div>
                    <div className=''>
                        <Input
                            {...form.register('englishName')}
                            errorMessage={getMessage(form, 'englishName')}
                            isInvalid={isError(form, 'englishName')}
                            placeholder='English name'
                            className='flex-1'
                            variant='flat'
                        />
                    </div>
                    <div className='pt-2 space-y-3'>
                        <Button type='submit' color='primary' className='w-full'>
                            Save topic
                        </Button>
                        <Button color='warning' className='w-full'>
                            Translate to other languages
                        </Button>
                    </div>
                </div>
            </Form>
            <div className='my-8 max-w-5xl mx-auto'>
                <Table
                    aria-label='Controlled table example with dynamic content'
                    selectedKeys={selectedKeys}
                    selectionMode='multiple'
                    onSelectionChange={setSelectedKeys}
                >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default EditTopic;
