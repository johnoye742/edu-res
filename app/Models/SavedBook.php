<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedBook extends Model
{
    use HasFactory;
    protected $table = 'saved_books';
    protected $fillable = [
        'name',
        'key',
        'cover_id',
        'email'
    ];
}
