<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIUsage extends Model
{
    use HasFactory;
    protected $table = 'ai_usages';
    protected $fillable = [
        'email',
        'data'
    ];
}
