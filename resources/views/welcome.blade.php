<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Welcome in E-annonce</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    {{-- tailwind css --}}
    <link href="{{ asset('/css/app.css')}}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">


    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app" >
        <div class="w-full bg-white shadow-sm">
            <div class="px-4 flex flex-wrap items-center justify-between">
                <div class="m-2">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        <img src="{{asset('images/logo.png')}}" alt="E-Annonce" class="h-12">
                    </a>
                </div>
                @guest
                    @if (Route::has('login'))
                            <a class="font-bold text-white no-underline" href="{{ route('login') }}"><button class="btn btn-primary font-bold">{{ __('Login') }}</button></a>
                    @endif
                @else
                    <div class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </div>
                @endguest
            </div>
        </div>

        <main>
                <h1 class="my-24 font-bold font-mono text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500"> Bienvenue au E-Annonce de <br> FSM</h1>
            
                <ul class="grid grid-cols-3 grid-flow-row gap-x-1 justify-items-center ">
                <li class="text-1xl font-serif"><a href="{{ route('login') }}" class="no-underline">
                    <img src="{{asset('/images/responsable.png')}}" alt="Responsable" class="border-4 border-black ml-4 rounded-full w-28 h-28"><br>
                    <p class="text-black text-center text-3xl italic">Responsable</p>
                </a></li>
                <li class="text-1xl font-serif"><a href="{{ route('login') }}" class="no-underline">
                    <img src="{{asset('/images/admin.png')}}" alt="Admin" class="border-4 border-black rounded-full w-28 h-28"><br>
                    <p class="text-black text-center text-3xl italic">Admin</p>
                </a></li>
                <li class="text-1xl font-serif"><a href="{{ route('login') }}" class="no-underline">
                    <img src="{{asset('/images/members.png')}}" alt="Member" class="border-4 border-black rounded-full w-28 h-28"><br>
                    <p class="text-black text-center text-3xl italic">Member</p>
                </a></li>
            </ul>
        </main>
    </div>

    <footer class=" bg-black w-full fixed bottom-0">
        <p class="mt-2 font-bold text-md text-center text-white">FSM-UMI@copyright</p>
    </footer>
</body>
</html>
