import places from '@/db/place'
import { Place } from '@/components/Place/Place'


export const PlaceList = () => {
    return (
        <div className='flex gap-4'>
            {places.map((place) => {
                return (
                    <Place image={place.image} title={place.title}></Place>
                )
            })}
        </div>
    )
}
