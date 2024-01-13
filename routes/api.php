<?php

use App\Models\AIUsage;
use App\Models\SavedBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/save-usage', function (Request $request) {
    $validatedData = $request -> validate([
        "data" => 'json|required'
    ]);

    $data = [
        'data' => $validatedData['data'],
        'email' => Auth::user() -> email
    ];

    $usage = new AIUsage($data);

    if($usage -> save()) {
        return 'success';
    }
}) -> name('save-usage');

Route::post('/save-book', function (Request $request) {
    Log::debug($request);

    return $request;
}) -> name('save_book')
-> middleware('auth');

Route::put('/save', function (Request $request) {
    $validatedData = $request -> validate([
        'title' => 'required',
        'cover_id' => 'required',
        'key' => 'required',
        'email' => 'required'
    ]);

    $options = [
        'name' => $validatedData['title'],
        'key' => $validatedData['key'],
        'cover_id' => $validatedData['cover_id'],
        'email' => $validatedData['email']
    ];

    $book = new SavedBook($options);

    if($book -> save($options)) {
        return 'fuck yeah';
    }
}) -> name('save');

Route::delete('books/{id}', function ($id) {
    $book = SavedBook::find($id);
    $book -> delete();
}) -> name('delete-book');
