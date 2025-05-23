import bannerAbout from '../assets/banner_about.jpg'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const About = () => {
    return (
        <div className='container-custom-v2'>
            <div className='max-h-[480px] w-full flex relative my-7'>

                <img className=' w-full object-bottom' src={bannerAbout} alt="banner" />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className="absolute bottom-8 text-center z-10 px-4">
                    <h1 className="text-white text-4xl font-bold mb-2">Tham gia cùng chúng tôi</h1>
                    <p className="text-white text-base ">
                        Chúng tôi là một nhóm gồm những người từng trải, đam mê du lịch và các chuyên gia, cùng nhau xây dựng công ty du lịch thú vị nhất thế giới. Chúng tôi đam mê giúp mọi người khám phá thế giới và cam kết mang đến những chuyến đi không thể nào quên.
                    </p>
                    <Button className='bg-blue-500 text-white rounded-full mt-3'>Join us</Button>
                </div>
            </div>

            <section className='mt-5'>
                <p className='text-3xl font-bold'>Thành viên Nhóm 9</p>
                <ul className='flex flex-col my-5 gap-y-6'>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Đinh Trúc Vân</p>
                            <p className='text-blue-400 font-bold'>22166102</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Hồ Võ Minh Trường</p>
                            <p className='text-blue-400 font-bold'>22166093</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Nguyễn Minh Phú</p>
                            <p className='text-blue-400 font-bold'>22166069</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Trần Xuân Trường</p>
                            <p className='text-blue-400 font-bold'>22166095</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Nguyễn Quỳnh Nhi</p>
                            <p className='text-blue-400 font-bold'>22166065</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Nguyễn Hoàng Minh Tuấn</p>
                            <p className='text-blue-400 font-bold'>22166098</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Nguyễn Đức Trọng</p>
                            <p className='text-blue-400 font-bold'>22166091</p>
                        </div>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div>
                            <p className='font-bold'>Trần Dương Vinh</p>
                            <p className='text-blue-400 font-bold'>22166103</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default About
