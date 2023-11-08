import Search from "@/Components/SearchBooks"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import GuestLayout from '@/Layouts/Guest'
import { Head } from "@inertiajs/react"
import { lazy, useState, useEffect } from "react"
import BookCard from '@/Components/BookCard'




function Books({user}) {
    const [books, setBooks] = useState([])
    const [a, setA] = useState('')
    const [status, setStatus] = useState('loading')


    let fetch = (search = 'Education') => {
        setStatus('Loading Books...')
        getBooks(search).then((response) => {

            console.log(response.docs)
            setBooks(response.docs)
            setA('')
            setStatus('finished')
        }).catch((reason) => {
            setStatus("Error loading books, try again")
        })

    }
    useEffect(() => {
        fetch()

      }, []);



    const bookList = books.map((book, index) => <BookCard fallback={(<>Loading...</>)} key={book.key} title={book.title} book_key={book.key} cover_id={book.cover_i} email={user.email} link={`https://openlibrary.org${book.key}`} image={`https://covers.openlibrary.org/b/ID/${book.cover_i}-M.jpg`}/>)

    return (
        <>

            <GuestLayout user={user} className="flex flex-col px-0" header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Books</h2>}>
                <Head title="Books"></Head>
                <Search q={a} setQ={setA} fetch={fetch} className="float-right p-5 flex flex-row gap-2"></Search>

                <div className="grid lg:grid-cols-3 grid-cols-1 px-3 lg:px-0 gap-5" fallback={(<>Loading...</>)}>
                    { status == 'finished' ? bookList : (<p className="text-2xl">{status}</p>)}
                </div>
            </GuestLayout>

        </>
    )
}

async function getBooks(search) {
    let s = ''
    if(search != null && search != '') {
        s = '/search.json?q='+search
    } else {
        s = '/subjects/love.json'
    }

    let result = await fetch('https://openlibrary.org'+s, {
        method: "GET"
    })
    .then((res) => res.json())
    return result
}



export default Books
