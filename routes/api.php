<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\DashPublications;

use App\Http\Middleware\CheckUserRole;


// Public routes
Route::get('/test', [DashPublications::class, 'allPublications']);

// Authentication Routes

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes
Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('/register', 'Auth\RegisterController@register');

// User routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::put('/users/{user}', [UserController::class, 'update'])->middleware('can:update,user');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->middleware('can:delete,user');
});

// Annonce routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/annonces', [AnnonceController::class, 'index']);
    Route::post('/annonces', [AnnonceController::class, 'store']);
    Route::get('/annonces/{annonce}', [AnnonceController::class, 'show']);
    Route::put('/annonces/{annonce}', [AnnonceController::class, 'update'])->middleware('can:update,annonce');
    Route::delete('/annonces/{annonce}', [AnnonceController::class, 'destroy'])->middleware('can:delete,annonce');
});

// Information routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/information', [InformationController::class, 'index']);
    Route::post('/information', [InformationController::class, 'store']);
    Route::get('/information/{info}', [InformationController::class, 'show']);
    Route::put('/information/{info}', [InformationController::class, 'update'])->middleware('can:update,info');
    Route::delete('/information/{info}', [InformationController::class, 'destroy'])->middleware('can:delete,info');
});

// Admin routes
Route::middleware(['auth:sanctum', 'CheckUserRole:admin'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'indexAll']);
});

// Member routes
Route::middleware(['auth:sanctum', 'CheckUserRole:member'])->group(function () {
    Route::get('/member/dashboard', [UserController::class, 'memberDashboard']);
});

// Responsible routes
Route::middleware(['auth:sanctum', 'CheckUserRole:responsible'])->group(function () {
    Route::get('/responsible/dashboard', [UserController::class, 'respDashboard']);
});
