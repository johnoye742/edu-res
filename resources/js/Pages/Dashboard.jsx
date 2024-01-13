import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Chart } from 'chart.js/auto';
import { useEffect } from 'react';
import BookCard from '@/Components/BookCard'


export default function Dashboard({ auth, my_books }) {

    useEffect(() => {
      const data = [
        { date: '2 Nov', count: 10 },
        { date: '2 Nov', count: 20 },
        { date: '4 Nov', count: 15 },
        { date: '5 Nov', count: 25 },
        { date: '6 Nov', count: 22 },
        { date: '7 Nov', count: 30 },
        { date: '8 Nov', count: 28 },
      ];

      // Use reduce to aggregate data by date
      const aggregatedData = data.reduce((result, { date, count }) => {
        if (result[date]) {
          result[date] += count;
        } else {
          result[date] = count;
        }
        return result;
      }, {});

      const aggregatedChartData = {
        labels: Object.keys(aggregatedData),
        datasets: [
          {
            label: 'Monthly Usage',
            data: Object.values(aggregatedData),
          },
        ],
      };

      new Chart(document.getElementById('chart'), {
        type: 'bar',
        data: aggregatedChartData,
      });
    }, []);

    const books = my_books.map((book) => <BookCard key={book.key} saved='true' id={book.id} title={book.name} link={`https://openlibrary.org${book.key}`} image={`https://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg`}/>)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-5">
                        <div className="p-6 text-gray-900">
                            <h1>Welcome, {auth.user.name}</h1>
                            <h1 className='text-2xl'>AI Usage</h1>
                            <p className='text-gray-500'>View your AI usage for the past month.</p>
                            <canvas id='chart'></canvas>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden p-6 shadow-sm sm:rounded-lg">
                        <h1 className='text-2xl'>Saved Books</h1>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                            { books }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
