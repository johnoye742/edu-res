import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { Link } from '@inertiajs/react'

function Card({id, title, image, link, book_key, cover_id, email, saved}) {
    return (
        <div className="rounded-lg relative bg-white border-b border-gray-100">
            <img src={image} srcSet={image.replace('-M', '-S') + ' 48vw'} className="h-62 object-cover w-full"></img>
            <div className='p-5'>
                <h1 className="text-2xl capitalise mb-6">{title.length > 30 ? title.substr(0, 35)  + '...' : title.substr(0, 35)}</h1>
                <div className='flex flex-row gap-3  absolute bottom-2'>
                    <a href={link} target='_blank'><PrimaryButton>Open</PrimaryButton></a>
                    { !saved && <Link href={route('save')} method='put' data={{
                        title: title,
                        cover_id: cover_id,
                        key: book_key,
                        email: email
                    }} as='button'><SecondaryButton>Save</SecondaryButton></Link> }

                    { saved && <Link method='delete' as='button' type='button' href={route('delete-book', {'id': id})}><SecondaryButton>Delete</SecondaryButton></Link> }
                </div>

            </div>

        </div>
    )
}

export default Card
