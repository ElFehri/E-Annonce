<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\DashPublications;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//for delete
Route::get('/elements', function () {
    return view('elements');
});


/* Route::resource('annonces', AnnonceController::class);
Route::resource('information', InformationController::class);*/
Route::resource('users', UserController::class); 

Auth::routes();

Route::get('/home/dashboard', [DashPublications::class, 'toDash'])->name("toDash");
Route::get('/home/test',[DashPublications::class, 'allPublications'] );

Route::get('/annonces/create', [AnnonceController::class, 'create'])->name("createAnnonce");
Route::get('/annonces/edit', [AnnonceController::class, 'edit'])->name('modifierAnnonce');

Route::get('/information/create', [InformationController::class, 'create'])->name("createInformation");

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

