<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpeakyourmindConroller;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\ContactusController;

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
Route::post('speak-your-mind',[SpeakyourmindConroller::class, 'store']);
Route::post('careers',[CareersController::class, 'store']);
Route::post('contact-us',[ContactusController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
