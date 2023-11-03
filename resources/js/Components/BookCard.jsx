import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from './SecondaryButton'

function Card({title, image, description, link}) {
    return (
        <div className="rounded-lg relative bg-white border-b border-gray-100">
            <img src={image} className="h-62 object-cover w-full"></img>
            <div className='p-5'>
                <h1 className="text-2xl capitalise mb-6">{title.length > 30 ? title.substr(0, 35)  + '...' : title.substr(0, 35)}</h1>
                <div className='flex flex-row gap-3  absolute bottom-2'>
                    <a href={link} target='_blank'><PrimaryButton>Open</PrimaryButton></a>
                    <a href={link} target='_blank'><SecondaryButton>Save</SecondaryButton></a>
                </div>

            </div>

        </div>
    )
}

export default Card
