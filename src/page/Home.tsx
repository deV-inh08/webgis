import image from '../assets/a2d0f0767afb9c87bfe992f53637e167fade3017.png'
import { PlaceList } from '@/components/PlaceList/PlaceList'

const Home = () => {
    return (
        <div className='container-custom-v2'>
            <div className='max-h-[480px] w-full flex relative my-7'>

                <img className=' w-full object-cover' src={image} alt="banner" />
                <div className='absolute inset-0 bg-black/40'></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 px-4">
                    <h1 className="text-white text-4xl font-bold mb-2">Khám phá thế giới</h1>
                    <p className="text-white text-base">
                        Chuyến đi của bạn bắt đầu ở đây. Tìm kiếm và lưu các điểm đến yêu thích của bạn.
                    </p>
                </div>
            </div>
            <PlaceList ></PlaceList>
        </div>
    )
}

export default Home