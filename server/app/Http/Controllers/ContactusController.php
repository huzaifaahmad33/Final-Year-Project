<?php

namespace App\Http\Controllers;

use App\Models\Contactus;
use Illuminate\Http\Request;

class ContactusController extends Controller
{
    //
    function store(Request $request) {

        $cu = new Contactus;
        $cu->contactus_name = $request->input('contactus_name');
        $cu->contactus_email = $request->input('contactus_email');
        $cu->contactus_phone = $request->input('contactus_phone');
        $cu->contactus_city = $request->input('contactus_city');
        $cu->contactus_message = $request->input('contactus_message');
        $cu->save();

        return response()->json([
            'status'=> 200,
            'message'=> 'Submitted Successfully',
        ]);
    }
}
