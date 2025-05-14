import { Button } from '@heroui/button';

const ImportTopic = () => {
    const data = [
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
    ];
    return (
        <div className='px-6'>
            <div className='space-x-2'>
                <Button color='primary'>Create topic form file</Button>
                <Button color='danger'>Import topic form file</Button>
            </div>
            <div className='mt-4 py-4 px-6 bg-gray-50 rounded-xl'>
                {data.map((item) => (
                    <div key={item.id} className='py-1'>
                        <p className='font-medium'>{item.label}</p>
                        <div className='text-gray-600'>
                            {item.children.map((child) => (
                                <p key={child.id}>- {child.label}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImportTopic;
