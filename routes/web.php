<?php

use App\Http\Controllers\ProfileController;
use App\Models\AIUsage;
use App\Models\SavedBook;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Landing', [
        'user' => Auth::user()
    ]);
}) -> name('landing');

Route::get('/dashboard', function () {
    $my_books = SavedBook::all() -> where('email', Auth::user() -> email);
    $ai_usage = AIUsage::all() -> where('email', Auth::user() -> email);
    return Inertia::render('Dashboard', ['my_books' => $my_books, 'usage' => $ai_usage]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/books', function () {
    $my_books = SavedBook::all();
    return Inertia::render('Books', [
        'user' => Auth::user(),
        'my_books' => $my_books
    ]);
}) -> name('books');

Route::get('/support-ai', function () {
    return inertia('AI', [
        'aKey' => env('OPEN_API_KEY'),
        'user' => Auth::user()
    ]);
})
-> name('ai')
-> middleware('auth');

Route::inertia('about-us', 'About')
-> name('about');

Route::get('/test', function () {
    return Inertia::render('Landing');
});



require __DIR__.'/auth.php';
