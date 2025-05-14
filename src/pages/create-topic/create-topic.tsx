import { getMessage, isError } from '@/libs/form';
import { Input, Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
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

const CreateTopic = () => {
    const form = useForm({
        defaultValues: {
            topicName: '',
            englishName: '',
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
                    <p className='text-center text-xl py-2 font-bold'>Create a topic</p>
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
                    <div className='pt-2'>
                        <Button type='submit' color='primary' className='w-full'>
                            Save topic
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default CreateTopic;
