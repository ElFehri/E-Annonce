<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        if ($user->role == 'Admin') {
            return redirect('/admin/dashboard');
        } else if ($user->role == 'Responsible') {
            return redirect('/responsible/dashboard');
        } else {
            return redirect('/member/dashboard');
        }

        return $next($request);
    }

}
