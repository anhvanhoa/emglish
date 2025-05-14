import { getMessage, isError } from '@/libs/form';
import { Input, Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm, type FormSubmitHandler } from 'react-hook-form';
import { z } from 'zod';
const formSchema = z.object({
    lessonName: z.string().min(2, {
        message: 'Topic name must be at least 2 characters.',
    }),
    englishName: z.string().min(2, {
        message: 'English name must be at least 2 characters.',
    }),
});

type FormLesson = z.infer<typeof formSchema>;

const CreateLesson = () => {
    const form = useForm({
        defaultValues: {
            lessonName: '',
            englishName: '',
        },
        reValidateMode: 'onSubmit',
        resolver: zodResolver(formSchema),
    });
    const onSubmit: FormSubmitHandler<FormLesson> = ({ data }) => {
        console.log('data', data);
    };
    return (
        <div className='px-6 mt-3'>
            <Form className='w-full' control={form.control} onSubmit={onSubmit}>
                <div className='space-y-4 w-full max-w-lg mx-auto'>
                    <p className='text-center text-xl py-2 font-bold'>Create a lesson</p>
                    <div>
                        <Input defaultValue='未来计划' isDisabled />
                        <p className='text-sm px-3 italic'>Futrue plane</p>
                    </div>
                    <Input
                        {...form.register('lessonName')}
                        errorMessage={getMessage(form, 'lessonName')}
                        isInvalid={isError(form, 'lessonName')}
                        placeholder='Lesson name'
                        variant='flat'
                    />
                    <Input
                        {...form.register('englishName')}
                        errorMessage={getMessage(form, 'englishName')}
                        isInvalid={isError(form, 'englishName')}
                        placeholder='English name'
                        variant='flat'
                    />
                    <div className='pt-2'>
                        <Button type='submit' color='primary' className='w-full'>
                            Save lesson
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default CreateLesson;
