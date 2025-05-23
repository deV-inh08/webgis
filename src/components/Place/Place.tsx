
interface Props {
    title: string
    image: string
}

export const Place = ({ image, title }: Props) => {
    return (
        <div>
            <img src={image} alt={title} />
            <p className='text-black font-semibold'>{title}</p>
        </div>
    )
}
