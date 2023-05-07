<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

   

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password', 'CIN');
        
        header('Access-Control-Allow-Origin: *');
        if (Auth::attempt($credentials)) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['errors' => ['Invalid email, CIN, or password.']], 422);
        }
    }



    protected function authenticated(Request $request, $user)
    {
        if ($request->wantsJson()) {
            return response()->json(['status' => 'success']);
        }
        return redirect()->intended($this->redirectPath());
    }

    protected function loggedOut(Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json(['status' => 'success']);
        }
        return redirect('/');
    }
}
