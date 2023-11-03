import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import GuestLayout from '@/Layouts/Guest'
import { Head } from "@inertiajs/react"
import BookCard from '@/Components/BookCard'
import { useState } from "react"

function Books({user}) {
    const [books, setBooks] = useState([])
    const bookList = books.map((book, index) => <BookCard key={book.work_count} title={book.title} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis tenetur debitis eveniet totam, sequi cumque alias unde. Debitis mollitia delectus voluptatibus autem cum praesentium reprehenderit velit blanditiis impedit nobis?" link={`https://openlibrary.org${book.key}`} image={`https://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg`}/>)
    getBooks().then((response) => {
        console.log(response.works)
        setBooks(response.works)
    })



    return (
        <>

            <GuestLayout user={user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Books</h2>}>
                <Head title="Books"></Head>

                <div className="grid grid-cols-4 gap-5">
                    {bookList}
                </div>
            </GuestLayout>

        </>
    )
}

async function getBooks() {
    let result = await fetch('https://openlibrary.org/subjects/love.json', {
        method: "GET"
    })
    .then((res) => res.json())
    return result
}

export default Books
