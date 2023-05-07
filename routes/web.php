<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\DashPublications;

use App\Http\Middleware\CheckUserRole;

/*
Route::get('/', function () {
    return view('welcome');
});

//for delete
Route::get('/elements', function () {
    return view('elements');
});


 Route::resource('annonces', AnnonceController::class);
Route::resource('information', InformationController::class);
Route::resource('users', UserController::class); 

Auth::routes();

//Route::get('/home/dashboard', [DashPublications::class, 'toDash'])->name("toDash");

//routing using CheckUserRole middelware.
Route::middleware(['auth', 'CheckUserRole'])->group(function () {
    // Member routes
    Route::get('/member/dashboard', [UserController::class, 'memberDashboard']);

    // Admin routes
    Route::get('/admin/dashboard', [UserController::class, 'adminDashboard']);
    
    // Responsible routes
    Route::get('/responsible/dashboard', [UserController::class, 'respDashboard']);
    
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
*/
