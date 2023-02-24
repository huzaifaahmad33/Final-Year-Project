<?php

namespace App\Http\Controllers;

use App\Models\Careers;
use Illuminate\Http\Request;

class CareersController extends Controller
{
    //
    function store(Request $request) {

        $careers = new Careers;
        $careers->careers_name = $request->input('careers_name');
        $careers->careers_email = $request->input('careers_email');
        $careers->careers_city = $request->input('careers_city');
        $careers->careers_department = $request->input('careers_department');
        $careers->careers_cv = $request->input('careers_cv');
        $careers->save();

        return response()->json([
            'status' => 200,
            'message' => 'Submitted Successfully',
        ]);
    }
}
