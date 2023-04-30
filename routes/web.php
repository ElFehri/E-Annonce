<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\DashPublications;

use App\Http\Middleware\CheckUserRole;

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

//Route::get('/home/dashboard', [DashPublications::class, 'toDash'])->name("toDash");

//routing using CheckUserRole middelware.
Route::group([['prefix' => 'user', 'middleware' => 'CheckUserRole']], function(){
    Route::get('/admin/dashboard',       [UserController::class, "adminDash"]);
    Route::get('/responsable/dashboard', [UserController::class, "respDash"]);
    Route::get('/member/dashboard',      [UserController::class, "memberDash"]);
});

//route de l'ecran de test .
Route::get('/home/test',[DashPublications::class, 'allPublications'] );

//gestion des annonces
Route::get('/annonces/create', [AnnonceController::class, 'create'])->name("createAnnonce");
Route::get('/annonces/edit', [AnnonceController::class, 'edit'])->name('modifierAnnonce');

//gestion des information
Route::get('/information/create', [InformationController::class, 'create'])->name("createInformation");

//apres login
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


