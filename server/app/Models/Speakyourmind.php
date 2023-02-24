<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speakyourmind extends Model
{
    use HasFactory;
    protected $table = 'speakyourminds';
    protected $fillable = [
        'sym_name',
        'sym_email',
        'sym_city',
        'sym_message'
    ];
}
