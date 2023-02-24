<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Careers extends Model
{
    use HasFactory;
    protected $table = 'careers';
    protected $fillable = [
        'careers_name',
        'careers_email',
        'careers_city',
        'careers_department',
        'careers_cv'
    ];
}
