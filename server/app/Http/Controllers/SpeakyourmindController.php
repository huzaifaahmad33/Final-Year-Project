<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Speakyourmind;

class SpeakyourmindController extends Controller
{
    //
    function store(Request $request) {

        $sym = new Speakyourmind;
        $sym->sym_name = $request->input('sym_name');
        $sym->sym_email = $request->input('sym_email');
        $sym->sym_city = $request->input('sym_city');
        $sym->sym_message = $request->input('sym_message');
        $sym->save();

        return response()->json([
            'status'=> 200,
            'message'=> 'Submitted Successfully',
        ]);
    }
}
